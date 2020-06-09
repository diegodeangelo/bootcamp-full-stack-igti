const fs = require("fs").promises;
const path = require("path");

let gradeFilepath = path.resolve("data", "grades.json");

async function findAll() {
  let data = await fs.readFile(gradeFilepath, "utf-8");

  return JSON.parse(data);
}

async function find(id) {
  const { grades } = await findAll();

  return grades.find((grade) => grade.id == id);
}

async function findBy(filters) {
  const { grades } = await findAll();

  return grades.filter(function (grade) {
    for (filter in this) {
      if (this[filter] != grade[filter]) {
        return false;
      }
    }

    return true;
  }, filters);
}

async function update({ id, student, subject, type, value }) {
  const { nextId, grades } = await findAll();

  let gradeIndex = grades.findIndex((grade) => grade.id == id);

  if (gradeIndex < 0) {
    throw new Error(`Grade com id ${id} não existe!`);
  }

  grades[gradeIndex] = {
    id,
    student,
    subject,
    type,
    value,
    timestamp: new Date().toISOString(),
  };

  await fs.writeFile(
    gradeFilepath,
    JSON.stringify({
      nextId,
      grades,
    })
  );

  return grades[gradeIndex];
}

async function insert({ student, subject, type, value }) {
  const { nextId, grades } = await findAll();

  const grade = {
    id: nextId,
    student,
    subject,
    type,
    value,
    timestamp: new Date().toISOString(),
  };

  await fs.writeFile(
    gradeFilepath,
    JSON.stringify({
      nextId: nextId + 1,
      grades: [...grades, grade],
    })
  );

  return grade;
}

async function exclude(id) {
  const { nextId, grades } = await findAll();

  let gradeIndex = grades.findIndex((grade) => grade.id == id);

  if (gradeIndex < 0) {
    throw new Error(`Grade com id ${id} não existe!`);
  }

  grades.splice(gradeIndex, 1);

  await fs.writeFile(
    gradeFilepath,
    JSON.stringify({
      nextId,
      grades,
    })
  );
}

module.exports = { find, findAll, findBy, update, insert, exclude };

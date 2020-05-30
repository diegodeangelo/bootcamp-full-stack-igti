var usuarios = [];
var usuariosFiltrados = [];

var estatisticas = {
  totalMasculino: 0,
  totalFeminino: 0,
  somaIdades: 0,
  mediaIdades: 0,
};

window.addEventListener("load", () => {
  function render() {
    calcularEstatisticas();

    renderUsuarios();
    renderEstatisticas();
  }

  function renderUsuarios() {
    const usuariosDiv = document.querySelector(".usuarios");
    let titulo = "Nenhum  usuário filtrado";
    let usuariosLista = "";

    if (usuariosFiltrados.length > 0) {
      titulo = `${usuariosFiltrados.length} usuário(s) encontrado(s)`;
    }

    usuariosFiltrados.forEach((usuario) => {
      const { nome, sobrenome, idade, imagem } = usuario;
      const nomeCompleto = `${nome} ${sobrenome}`;

      usuariosLista += `<li>
        <figure class="image">
          <img class="is-rounded" src="${imagem}" alt="${nomeCompleto}">
        </figure>
        <span class="nome">${nomeCompleto}</span>
        <span>,&nbsp;</span>
        <span class="idade">${idade} anos</span>
      </li>`;
    });

    usuariosDiv.innerHTML = `<h2 class="is-size-2">${titulo}</h2><ul>${usuariosLista}</ul>`;
  }

  function renderEstatisticas() {
    const estatisticasDiv = document.querySelector(".estatisticas");
    let titulo = "Nada a ser exibido";
    let estatisticasLista = "";

    if (usuariosFiltrados.length > 0) {
      titulo = `Estatísticas`;
    }

    estatisticasLista += `<li>Sexo masculino: <strong>${estatisticas.totalMasculino}</strong></li>`;
    estatisticasLista += `<li>Sexo feminino: <strong>${estatisticas.totalFeminino}</strong></li>`;
    estatisticasLista += `<li>Soma das idades: <strong>${estatisticas.somaIdades}</strong></li>`;
    estatisticasLista += `<li>Média das idades: <strong>${estatisticas.mediaIdades}</strong></li></ul>`;

    estatisticasDiv.innerHTML = `<h2 class="is-size-2">${titulo}</h2><ul>${estatisticasLista}</ul>`;
  }

  function calcularEstatisticas() {
    estatisticas.totalMasculino = usuariosFiltrados.filter(
      (usuario) => usuario.genero === "male"
    ).length;

    estatisticas.totalFeminino = usuariosFiltrados.filter(
      (usuario) => usuario.genero === "female"
    ).length;

    estatisticas.somaIdades = usuariosFiltrados.reduce((acumulado, usuario) => {
      return acumulado + usuario.idade;
    }, 0);

    mediaIdades = usuariosFiltrados.reduce((acumulado, usuario) => {
      return acumulado + usuario.idade / usuariosFiltrados.length;
    }, 0);
    estatisticas.mediaIdades = formatarNumero(mediaIdades);
  }

  function formatarNumero(numero) {
    return new Intl.NumberFormat("de-DE").format(numero);
  }

  document.querySelector("#busca").addEventListener("keyup", (event) => {
    let input = event.target;

    if (!input.value) {
      document
        .querySelector("#busca-form button")
        .setAttribute("disabled", true);

      return;
    }

    document.querySelector("#busca-form button").removeAttribute("disabled");

    if (input.key != "Enter") {
      return;
    }
  });

  document.querySelector("#busca-form").addEventListener("submit", (event) => {
    event.preventDefault();

    search();
  });

  (async () => {
    usuarios = await getUsuarios();
    usuariosFiltrados = usuarios;

    document.querySelector(".loader").classList.add("is-hidden");

    render();
  })();

  function search() {
    let nome = document.querySelector("#busca").value;

    if (nome.length == 0) {
      usuariosFiltrados = usuarios;
      render();

      return;
    }

    usuariosFiltrados = usuarios.filter((usuario) => {
      let nomeCompleto = `${usuario.nome} ${usuario.sobrenome}`;

      return nomeCompleto.toLowerCase().indexOf(nome.toLowerCase()) >= 0;
    });

    render();
  }
});

async function getUsuarios() {
  const response = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await response.json();

  return json.results.map((usuario) => {
    const {
      gender,
      name,
      dob: { age: age },
      picture: { thumbnail: picture },
    } = usuario;

    return {
      genero: gender,
      nome: name.first,
      sobrenome: name.last,
      idade: age,
      imagem: picture,
    };
  });
}

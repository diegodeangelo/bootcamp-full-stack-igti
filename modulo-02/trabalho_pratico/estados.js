import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const basePath = resolve("data", "estados");

export function importar() {
  const estados = JSON.parse(readFileSync("data/Estados.json", "utf-8"));
  const cidades = JSON.parse(readFileSync("data/Cidades.json", "utf-8"));

  estados.forEach((estado) => {
    writeFileSync(
      obterPathEstado(estado.Sigla),
      JSON.stringify(obterCidades(estado)),
      "utf-8"
    );
  });

  function obterCidades(estado) {
    let cidadesEstado = [];

    cidades.forEach((cidade) => {
      if (cidade.Estado == estado.ID) {
        cidadesEstado.push({ ID: cidade.ID, Nome: cidade.Nome });
      }
    });

    return cidadesEstado;
  }
}

function obterPathEstado(uf) {
  return resolve(basePath, `${uf}.json`);
}

const todasUFs = () => {
  const estados = JSON.parse(
    readFileSync(resolve("data", "Estados.json"), "utf-8")
  );

  return estados.map((estado) => estado.Sigla);
};

function obterCidades(uf) {
  return JSON.parse(readFileSync(obterPathEstado(uf)));
}

function calcularQtdeCidades(uf) {
  return obterCidades(uf).length;
}

function ordenarCidadesPorNome() {
  let informacoes = todasUFs().map((uf) => {
    return { uf: uf, totalCidades: calcularQtdeCidades(uf) };
  });

  return informacoes.sort((a, b) => a.totalCidades - b.totalCidades);
}

export function imprimirCincoEstadosComMaisCidades() {
  console.log(
    ordenarCidadesPorNome()
      .slice(-5)
      .reverse()
      .map((informacao) => {
        const { uf, totalCidades } = informacao;

        return `${uf} - ${totalCidades}`;
      })
  );
}

export function imprimirCincoEstadosComMenosCidades() {
  console.log(
    ordenarCidadesPorNome()
      .slice(0, 5)
      .reverse()
      .map((informacao) => {
        const { uf, totalCidades } = informacao;

        return `${uf} - ${totalCidades}`;
      })
  );
}

function ordenarCidadesPorTamanhoNomeCrescente(cidades) {
  return cidades.sort((a, b) => {
    let deltaNomeLength = a.Nome.length - b.Nome.length;

    if (deltaNomeLength == 0) {
      return a.Nome.toLowerCase().localeCompare(b.Nome.toLowerCase());
    }

    return deltaNomeLength;
  });
}

function ordenarCidadesPorTamanhoNomeDecrescente(cidades) {
  return cidades.sort((a, b) => {
    let deltaNomeLength = b.Nome.length - a.Nome.length;

    if (deltaNomeLength == 0) {
      return a.Nome.toLowerCase().localeCompare(b.Nome.toLowerCase());
    }

    return deltaNomeLength;
  });
}

export function imprimirCidadeComMaiorNome() {
  console.log(
    todasUFs().map((uf) => {
      const cidades = ordenarCidadesPorTamanhoNomeDecrescente(obterCidades(uf));
      const cidadeComMaiorNome = cidades[0].Nome;

      return `${cidadeComMaiorNome} - ${uf}`;
    })
  );
}

export function imprimirCidadeComMenorNome() {
  console.log(
    todasUFs().map((uf) => {
      const cidades = ordenarCidadesPorTamanhoNomeCrescente(obterCidades(uf));
      const cidadeComMenorNome = cidades[0].Nome;

      return `${cidadeComMenorNome} - ${uf}`;
    })
  );
}

export function imprimirCidadeComMaiorNomeGeral() {
  let cidades = todasUFs().map((uf) => {
    const cidades = ordenarCidadesPorTamanhoNomeDecrescente(obterCidades(uf));
    const cidadeComMaiorNome = cidades[0].Nome;

    return { Nome: cidadeComMaiorNome, uf: uf };
  });

  const cidadesOrdenadas = ordenarCidadesPorTamanhoNomeDecrescente(cidades);
  const { Nome, uf } = cidadesOrdenadas[0];

  console.log([`${Nome} - ${uf}`]);
}

export function imprimirCidadeComMenorNomeGeral() {
  let cidades = todasUFs().map((uf) => {
    const cidades = ordenarCidadesPorTamanhoNomeCrescente(obterCidades(uf));
    const cidadeComMenorNome = cidades[0].Nome;

    return { Nome: cidadeComMenorNome, uf: uf };
  });

  const cidadesOrdenadas = ordenarCidadesPorTamanhoNomeCrescente(cidades);
  const { Nome, uf } = cidadesOrdenadas[0];

  console.log([`${Nome} - ${uf}`]);
}

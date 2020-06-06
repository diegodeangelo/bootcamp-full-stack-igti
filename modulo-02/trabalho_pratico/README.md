# Objetivo

Criar um projeto **Node.js** para realizar a criação de alguns métodos e processamento de arquivos JSON.

## Atividade

1. Implementar um método que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o UF do estado, por exemplo: MG.json.
2. Criar um método que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.
3. Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]
4. Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]
5. Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].
6. Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retorne o primeiro. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].
7. Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Exemplo: “Nome da Cidade - UF".
8. Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Exemplo: “Nome da Cidade - UF".

# Resultado

Exercício 3:

```javascript
["MG - 853", "SP - 645", "RS - 496", "BA - 417", "PR - 399"];
```

Exercício 4:

```javascript
["RO - 52", "AC - 22", "AP - 16", "RR - 15", "DF - 1"];
```

Exercício 5:

```javascript
[
  "Marechal Thaumaturgo - AC",
  "São Miguel dos Milagres - AL",
  "Santa Isabel do Rio Negro - AM",
  "Pedra Branca do Amaparí - AP",
  "Barro Preto (antigo Gov. Lomanto Jr.) - BA",
  "Deputado Irapuan Pinheiro - CE",
  "Brasília - DF",
  "Cachoeiro de Itapemirim - ES",
  "Santo Antônio do Descoberto - GO",
  "São Luís Gonzaga do Maranhão - MA",
  "São Sebastião da Vargem Alegre - MG",
  "Rio Verde de Mato Grosso - MS",
  "Vila Bela da Santíssima Trindade - MT",
  "São Sebastião da Boa Vista - PA",
  "São Sebastião de Lagoa de Roça - PB",
  "Santa Cruz da Baixa Verde - PE",
  "São Francisco de Assis do Piauí - PI",
  "Santa Cruz de Monte Castelo - PR",
  "São José do Vale do Rio Pret - RJ",
  "Governador Dix-Sept Rosado - RN",
  "Governador Jorge Teixeira - RO",
  "São João da Baliza - RR",
  "Almirante Tamandaré do Sul - RS",
  "Santa Terezinha do Progresso - SC",
  "Canindé de São Francisco - SE",
  "Euclides da Cunha Paulista - SP",
  "Santa Terezinha do Tocantins - TO",
];
```

Exercício 6:

```javascript
[
  "Feijó - AC",
  "Belém - AL",
  "Apuí - AM",
  "Amapá - AP",
  "Una - BA",
  "Icó - CE",
  "Brasília - DF",
  "Iúna - ES",
  "Caçu - GO",
  "Codó - MA",
  "Luz - MG",
  "Juti - MS",
  "Vera - MT",
  "Afuá - PA",
  "Emas - PB",
  "Exu - PE",
  "Acauã - PI",
  "Ivaí - PR",
  "Magé - RJ",
  "Açu - RN",
  "Jaru - RO",
  "Cantá - RR",
  "Ipê - RS",
  "Itá - SC",
  "Arauá - SE",
  "Itu - SP",
  "Pium - TO",
];
```

Exercício 7:

```javascript
["Barro Preto (antigo Gov. Lomanto Jr.) - BA"];
```

Exercício 8:

```javascript
["Açu - RN"];
```

// Esse exercício vai ser feito de duas maneiras.
// A primeira forma será como ternário, que é apenas duas validações.
// No caso é a quantidade pelo o valor.

// type TPrato = {
//   nome: string
//   valor: number
//   quantidade: number
// };

// const informaçoesPrato: TPrato = {
//   nome: "Arroz",
//   valor: 15,
//   quantidade: 1
// };

// const verificacaoPrato = informaçoesPrato.quantidade ?  informaçoesPrato.valor : "PRATO INDISPONÍVEL";
// console.log(verificacaoPrato);

// Agora a segunda forma de fazer esse exercício.
// Vai ser feito com for trandicional, e mais dinámico e elegante.

type TPrato = {
  nome: string
  valor: number
  quantidade: number
};

const informaçoesPrato: TPrato = {
  nome: "Arroz",
  valor: 15,
  quantidade: 1
};

let verificacaoPrato = 0;

for(let i = 0; i < informaçoesPrato.quantidade; i++) {
  verificacaoPrato += informaçoesPrato.valor;
}

if (informaçoesPrato.quantidade > 0) {
  console.log(`O PRATO TRADICIONAL CUSTA ${informaçoesPrato.valor} REAIS: ${informaçoesPrato.nome}`);
} else {
  console.log("PRATO INDISPONÍVEL");
};
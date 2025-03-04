type TDados = {
    matricula: string
    nome: string
    idade: number
}

const dadosAluno: TDados = {
    matricula: "2014A",
    nome: "Ana",
    idade: 20
};

console.log(`A matricula do aluno(a) ${dadosAluno.nome} é ${dadosAluno.matricula} e sua idade é ${dadosAluno.idade} anos. `);
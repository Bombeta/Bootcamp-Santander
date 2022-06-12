/*
    Crie uma função que recebe o array alunos e um número que irá representar a média final;
    Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
    Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/
const alunos = [
    {
        nome: 'Joõa',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '1C',
    },
    {
        nome: 'Miguel',
        nota: 2,
        turma: '2C',
    }
]
function mediaAlunos(array, media){

    let aprovados = [];

    for(let i =0 ; i < array.length; i++){

        const {nota, nome} = array[i];
        
        if(nota >= media){          

            aprovados.push(nome);
        }
    }

    console.log(aprovados);
}

mediaAlunos(alunos, 5);
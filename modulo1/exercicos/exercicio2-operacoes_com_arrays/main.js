/*
2º exercício
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Google' },
 { nome: 'Gabriel', idade: 15, empresa: 'Google' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

2.2 Utilizando o filter
Crie uma variávei que tenha apenas os usuários que trabalham na Google e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Google' }]

2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Amazon: undefined

2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
// Resultado:
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]

*/

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Google' },
    { nome: 'Gabriel', idade: 15, empresa: 'Google' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 Utilizando o map
var idadesUsuarios = usuarios.map(usuario => usuario.idade);
console.log(idadesUsuarios);

// 2.2 Utilizando o filter
var usuario1 = usuarios.filter(usuario => {
    return usuario.idade > 18 && usuario.empresa === 'Google';

});
console.log(usuario1);

// 2.3 Utilizando o find
var usuario2 = usuarios.find(usuario => usuario.empresa === 'Amazon');
console.log(usuario2);

// 2.4 Unindo operações
var usuarios1 = usuarios.map(usuario => {
    usuario.idade = usuario.idade * 2;
    return usuario
});

var usuarios2 = usuarios1.filter(usuario1 => usuario1.idade <= 50);
console.log(usuarios2);
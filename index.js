// let jogo1 = {
//     nome: 'Final Fantasy'
// }

// let jogo2 = {
//     nome: 'Fallout'
// }

// //Tendo um array de jogos com 2 objetos de jogo, dentro de um objeto

// let videogame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [jogo1, jogo2]
// }

// let jogo3 = {
//     nome: 'Fifa'
// }

// //Para adicionar o jogo 3 na lista de jogos

// videogame.jogos.push(jogo3)

// console.log(videogame)

// //OU:

// // Um objeto, com uma lista de jogos dentro:
// // let videogame = {
// //     nome: 'Playstation',
// //     valor: 5000,
// //     jogos: ['Final Fantasy', 'Fallout', 'Fifa']
// // }

// //A lista de jogos é um array dentro de objetos

// //Fazendo a criação do objeto direto:

// let videoGame = {
//     nome: 'Playstation',
//     valor: 5000,
//     jogos: [
//         { nome: 'Final Fantasy' },
//         { nome: 'Fallout' }
//     ]
// }

// console.log(videoGame)

// //Um objeto dentro de um outro objeto:

// let cliente = {
//     nome: 'Ricardo',
//     ultimoPedido: {
//         produto: 'Xbox',
//         valor: 3000,
//         jogos: [
//             { nome: 'Fifa' }
//         ]
//     }
// }

//Como ver o nome do ultimo pedido dentro do cliente

//console.log(cliente.ultimoPedido.jogos[0].nome)

const cidadeUm = {
    nome: 'Salvador'
}

const cidadeDois = {
    nome: 'Aracaju'
}

const cidadeTres = {
    nome: 'Maceió'
}

let brasil = {
    nome: 'Capitais',
    regiao: 'Nordeste',
    cidades: [cidadeUm, cidadeDois]
}

console.log(brasil)

// //Para adicionar outra cidade no array

brasil.cidades.push(cidadeTres)
console.log(brasil)

// //Criando o objeto diretamente de dentro do array, sem precisar instanciar ele. O abre e fecha chaves é um objeto e o abre e fecha colchetes será sempre um array.

// let Brasil = {
//     nome: 'Capitais',
//     regiao: 'Nordeste',
//     cidades: [
//         { nome: 'Salvador' },
//         { nome: 'Aracaju' },
//         { nome: 'Maceió' }
//     ]
// }

// console.log(brasil)

// let usuario = {
//     nome: 'Milena',
//     ultimoAcesso: {
//         dia: 'segunda',
//         horario: 14,
//         pedido: [
//             {site: 'Amazon'}
//         ]
//     }
// }

// //Para acessar qual o nome do site acessado. Ele imprime o nome do site

// console.log(usuario.ultimoAcesso.pedido[0].site)

// //Mostra o nome do objeto

// console.log(usuario.ultimoAcesso.pedido[0])
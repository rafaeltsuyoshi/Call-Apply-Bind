function time(message) {
    console.log(message)

    if(typeof message === 'object'){
        console.log( this.nome + " é o " + this.descricao + " " + message.nome)
    } else {
        console.log( this.nome + " é o " + this.descricao)
    }
}

var time1 = {
    nome: "Flamengo",
    descricao: "maior do Brasil"
}

var time2 = {
    nome:"Vasco",
    descricao: "pior do Brasil"
}

// primeiro é para this, seguido dos parametros da função
time.call(time1, time2)
time.call(time2, time1)

// const cachorro = {
//     nome: 'Puck',
//     idade: 5,
//     idadeCanina: function() {
//         return this.idade * 7
//     },
//     falar: function(vezes = 2, message = 'au au') {
//         for (let i = 0; i<vezes ; i++){
//             console.log( `${this.nome} falou: ${message}`)   
//         }
//     }
// }

// const pessoa = {
//     nome: 'Vinicius',
//     idade: 25,
//     falar: function(palavras) {
//         console.log( `${this.nome} falou: ${palavras}`)
//     },
//     latir: function() {
//         cachorro.falar.apply(pessoa, arguments)
//     }
// }

// // console.log(cachorro.idadeCanina())
// // pessoa.falar('oi')
// // cachorro.falar('oi')
// // // pessoa.latir('sad')
// // cachorro.falar.apply(pessoa, [3, 'tau, au'])

// pessoa.latir = cachorro.falar.bind(pessoa)
// pessoa.latir()

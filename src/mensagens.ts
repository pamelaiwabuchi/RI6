export default class Mensagens {
    public listarOpcoes = () => {
        console.log(`Escolha a operação digitando o número:`)
        console.log(`1 - Somar`)
        console.log(`2 - Subtrair`)
        console.log(`3 - Multiplicar`)
        console.log(`4 - Dividir`)
        console.log(`5 - Potenciar`)
        console.log(`6 - Radiciar`)
        console.log(`7 - Bhaskara`)
        console.log(`0 - Sair\n`)
    }
    public tutorial = () => {
        console.log(`Primeiro escolha a operação pelo número do menu`)
        console.log(`Depois digite os números separados por espaço, tais como: "1 2.2"`)
        console.log(`Para Bhaskara, digite 3 números (a, b e c), tais como: "1 -5 6"`)
        console.log(`Para encerrar a calculadora digite 0 a qualquer momento\n`)
    }
    public boasVindas = () => {
        console.log(`Olá! Vamos começar!`)
    }
}
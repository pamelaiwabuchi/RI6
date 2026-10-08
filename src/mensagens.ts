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
        console.log(`Depois digite o primeiro número e envie com a tecla Enter. Repita com os próximos números, se necessário.`)
        console.log(`Para Bhaskara, envie 3 números (a, b e c), conforme o sistema solicitar.`)
        console.log(`Para encerrar a calculadora digite 0 a qualquer momento\n`)
    }
    public boasVindas = () => {
        console.log(`Olá! Vamos começar!`)
    }
}
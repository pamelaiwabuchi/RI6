import * as readline from "readline"
import Calculo from "./Calculo.js"
import Mensagens from "./mensagens.js"
import Soma from "./Soma.js"
import Subtracao from "./Subtracao.js"
import Multiplicacao from "./Multiplicacao.js"
import Divisao from "./Divisao.js"
import Potenciacao from "./Potenciacao.js"
import Radiciacao from "./Radiciacao.js"
import Bhaskara from "./Bhaskara.js"

let mensagens = new Mensagens()

let mostratBhaskara = (a:number, b:number, c:number) => {
    if (a===0) {
        console.log(`Erro: o primeiro número não pode ser 0 em uma função do segundo grau`)
        return
    }

    let bhaskara = new Bhaskara()
    let raizes = bhaskara.calcular(a,b,c)

    if (raizes.length === 0) {
        console.log(`Não existem raízes reais\n`)
    } else if (raizes.length === 1) {
        console.log(`A raiz é: ${raizes[0]}\n`)
    } else {
        console.log(`As raízes são: ${raizes[0]} e ${raizes[1]}\n`)
    }
}

let mostrarResultado = (operacao:string, numero1:number, numero2:number) => {
    let calculo: Calculo

    switch (operacao) {
        case '1':
            calculo = new Soma()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
            break
        case '2':
            calculo = new Subtracao()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
            break
        case '3':
            calculo = new Multiplicacao()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
            break
        case '4':
            calculo = new Divisao()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
            break
        case '5':
            calculo = new Potenciacao()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
            break
        case '6':
            calculo = new Radiciacao()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
            break
    }
}

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let perguntar = () => {
        mensagens.listarOpcoes()

        leitor.question(`Qual a operação desejada?\n`, (resposta) => {
            let operacao = resposta

            if (operacao === '0') {
                console.log(`Até mais! \n`)
                leitor.close()
                return
            }

            let opcoesValidas = ['1', '2', '3', '4', '5', '6', '7']

            if (!opcoesValidas.includes(operacao)) {
                console.log(`Opção inválida\n`)
                perguntar()
                return
            }

            leitor.question(`Digite o primeiro número:\n`, (valor1) => {
                let numero1 = Number(valor1)

                leitor.question(`Digite o segundo número:\n`, (valor2) => {
                    let numero2 = Number(valor2)

                    if (operacao === '7') {
                        leitor.question(`Digite o terceiro número:\n`, (valor3) => {
                            let numero3 = Number(valor3)
                            mostratBhaskara(numero1, numero2, numero3)
                            perguntar()
                        })
                        return
                    }

                    mostrarResultado(operacao, numero1, numero2)
                    perguntar()
                })
            })
        })
    }

    perguntar()
}

mensagens.boasVindas()
mensagens.tutorial()
iniciar()
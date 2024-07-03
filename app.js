const prompt = require('prompt-sync')({sigint: true})

let priNumero
let operador
let segNumero
let resultado

priNumero = parseFloat(prompt('Qual o primeiro numero?: '))
operador = prompt('Qual operador deseja usar (+), (-), (*), (/), (%) ?: ')
segNumero = parseFloat(prompt('Qual o segundo numero?: '))

switch (operador) {
    case '+':
        resultado = priNumero + segNumero
        console.log(`O resultado da operação é ${resultado}`)
        break
    case '-':
        resultado = priNumero - segNumero
        console.log(`O resultado da operação é ${resultado}`)
        break
    case '*':
        resultado = priNumero * segNumero
        console.log(`O resultado da operação é ${resultado}`)
        break
    case '/':
        if (segNumero == 0) {
            console.log('Não é possivel divisão por 0')
            return
        }
        resultado = priNumero / segNumero
        console.log(`O resultado da operação é ${resultado}`)
        break
    case '%':
        resultado = priNumero * (segNumero / 100)
        console.log(`O resultado da operação é ${resultado}`)
        break
    default:
        console.log('Algo deu errado tente denovo!')
    }
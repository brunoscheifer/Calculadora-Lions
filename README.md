# Calculadora Simples

Código feito em 03/07/2024

## Variaveis e como foi feito

**prompt-sync**: Usado para pegar a entrada do usuario.

**priNumero**: Variavel usada para guardar o primeiro numero escrito pelo usuario.

**operador** Variavel usada para guardar o operador usado na conta feita depois.

**segNumero** Variavel usada para guardar o segundo numero escrito pelo usuario.

**resultado** Variavel usada para guardar o resultado da conta feita.

## switch

Ele pega o operador digitado pelo usuario e faz a conta dentro de cada `case`
```javascript
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
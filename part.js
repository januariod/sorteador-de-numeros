async function sortear() {
    const total = Number(document.getElementById('totalResultados').value)
    

    const menor = Number(document.getElementById('inputMenor').value)
   

    const maior = Number(document.getElementById('inputMaior').value)

    for(let a = 0; a < 20; a++){

        const elementoHTMLRV = document.querySelector('.results-value')
        elementoHTMLRV.innerHTML = ''

        for(let i = 0; i < total; i++){

            const resultado = Math.floor(Math.random() * (maior - menor + 1)) + menor
            console.log(resultado)
    
            const bolinhaResultado = document.createElement('div')
            bolinhaResultado.classList.add('result-value')
            bolinhaResultado.innerText = resultado


   

         elementoHTMLRV.append(bolinhaResultado)
        }

        await wait(90)
    }
}

function wait(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}
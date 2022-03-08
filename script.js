const API_URL = 'https://free.currconv.com/api/v7/convert?q=USD_BRL,BRL_USD&compact=ultra&apiKey=1cc4a718e9781c56056a'
const form = document.querySelector('#form')
const divResult = document.querySelector('.conversionResult')
const toggleButton = document.querySelector('.toggleButton')
const title = document.querySelector('.title')
const abbreviation = document.querySelector('.abbreviation')

const changeCoin = () => {
    addClass()
    changeText()
}


const addClass = () => {
    
    title.classList.toggle('resultUSD')
}
const changeText = () => {
    if(title.classList.contains('resultUSD')){
        title.innerHTML = 'BRL para USD'
        toggleButton.innerHTML = 'USD para BRL'
        abbreviation.innerHTML = 'R$'
        
        
    } else {
        title.innerHTML = 'USD para BRL'
        toggleButton.innerHTML = 'BRL para USD'
        abbreviation.innerHTML = 'US$'

    }
}
toggleButton.addEventListener('click', changeCoin)

form.onsubmit = event => {
    event.preventDefault()

    const valueToConvert = document.forms['form']['valueToConvert']

    if(title.classList.contains('resultUSD')){
        fetch(API_URL)
        .then(response => {
            response.json()
            .then(data => {
                const result = data.BRL_USD * valueToConvert.value
                divResult.innerHTML = `Valor convertido: US$ ${result.toFixed(2)}`
            })
    })
    } else {
        fetch(API_URL)
        .then(response => {
            response.json()
            .then(data => {
                const result = data.USD_BRL * valueToConvert.value
                divResult.innerHTML = `Valor convertido: R$ ${result.toFixed(2)}`
            })
        })}
}

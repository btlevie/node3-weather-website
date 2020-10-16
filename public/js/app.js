console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const loc = document.querySelector('#location')
const forecast = document.querySelector('#forecast')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    loc.innerHTML = "Loading..."
    forecast.innerHTML = ""

    fetch('/weather?address=' + location).then ((response) => {
        response.json().then((data) => {
            if(data.error) {
                return loc.innerHTML = data.error
            }
            loc.innerHTML = data.location
            forecast.innerHTML = data.temperature
        })
    })
})
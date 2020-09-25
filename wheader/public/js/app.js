let nuevoSelector = document.querySelector('.wrapper')

let agregar = '<select class="form-control" id="inputGroupSelect01"><option value="marbella">Marbella</option><option value="malaga">Málaga</option><option value="huelva">Huelva</option><option value="sevilla">Sevilla</option></select>'

let contenidoPrevio = nuevoSelector.innerHTML

nuevoSelector.innerHTML = agregar + contenidoPrevio

tiempo('marbella')
selector()

async function tiempo(cityName){

  let urlApiCity ='https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=3c958106ab8608bd8f689b422b367bd4&units=metric&units=imperial&lang=es'

  let request = await fetch(urlApiCity)
  let selector = await request.json()

  document.querySelector('.location').innerText = selector.name
  document.querySelector('.heading').innerText = selector.weather[0].description
  document.querySelector('.temp-value').innerText = parseInt(selector.main.temp)
  document.querySelector('.humidity').innerText = parseInt(selector.main.humidity)
  document.querySelector('.wind-speed').innerText = selector.wind.speed
}

function selector() {

  let selectForm = document.querySelector('#inputGroupSelect01')

  selectForm.addEventListener('change', citySelector)
}

function citySelector() {

  let selectMain = document.querySelector('#inputGroupSelect01')
  let cityName = selectMain[selectMain.selectedIndex].value

  tiempo(cityName)
}
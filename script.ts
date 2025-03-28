const apiKey = '33bf6c60aea79413fd68db359ccf02 78'; // Substitua pela sua chave de API

async function getWeather() {
  const city = document.getElementById('city').value;
  if (city === "") {
    alert("Por favor, digite o nome de uma cidade.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      alert("Cidade não encontrada!");
      return;
    }

    const weather = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    document.getElementById('weather-info').innerHTML = `
      <p><strong>Clima:</strong> ${weather}</p>
      <p><strong>Temperatura:</strong> ${temp}°C</p>
      <p><strong>Umidade:</strong> ${humidity}%</p>
      <p><strong>Vento:</strong> ${wind} m/s</p>
    `;
  } catch (error) {
    alert("Erro ao obter os dados. Tente novamente.");
  }
}

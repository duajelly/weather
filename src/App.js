import React from "react";
import Form from "./components/form";
import Weather from "./components/weather";
import Header from "./components/header";

const API_KEY_WEATHER = "1d1736289b28be5ca13c1e643a674ed3"; //API ключ

class App extends React.Component {

  state = {                   // создаем "шаблон"
    position: undefined,      //местоположение
    weather: undefined,       //погода
    temp: undefined,          //температура
    pressure: undefined,      //атм.давление
    humidity: undefined,      //влажность
    wind: undefined,          //ветер
    sunrise: undefined,       //восход солнца
    sunset: undefined,        //закат солнца
    cloudness: undefined,     //облачность
    visibility: undefined,    //видимость
    error: undefined          //какие-либо ошибки
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WEATHER}&units=metric&lang=en`);
    //ссылка для получения информации по api ^ (в формате json)
    const data = await api_url.json(); // полученный объект json

    if (city && !data.message) { // проверяем есть ошиби или поступившие данные

      // console.log(data); //что-бы посмотреть json в консоле рабработчика браузера

      //преобразования времени всхода и заката
      let sunriseInSec = data.sys.sunrise;
      let date_sunrise = new Date(sunriseInSec * 1000);
      let timeSunrise = date_sunrise.toLocaleTimeString();

      let sunsetInSec = data.sys.sunset;
      let date_sunset = new Date(sunsetInSec * 1000);
      let timeSunset = date_sunset.toLocaleTimeString();

      this.setState({ // соединм полученные данные и помещаем их в переменные
        weather: data.weather[0].main + " , " + data.weather[0].description,
        temp: data.main.temp + " °C",
        pressure: data.main.pressure + " hPa",
        humidity: data.main.humidity + " %",
        wind: data.wind.speed + " m/s " + data.wind.deg + " °",
        position: data.name + " , " + data.sys.country,
        sunrise: timeSunrise,
        sunset: timeSunset,
        cloudness: data.clouds.all + " %", //
        visibility: data.visibility + "m",
        error: undefined
      });
    } else {
      this.setState({ //если у нас есть ошибка или дкнопка нажата но данных от сайта нет
        weather: undefined,
        temp: undefined,
        pressure: undefined,
        humidity: undefined,
        wind: undefined,
        position: undefined,
        sunrise: undefined,
        sunset: undefined,
        cloudness: undefined, //
        visibility: undefined, //
        error: "Ooops...  " + data.message + " , " + data.cod
      });
    }
  }

  render() { //соединяем компонеты
    return (
      <div>
        <div><Header /></div>
        <div className="main">
          <Form wetherMethod={this.gettingWeather} />
          <Weather
            //отправляем переменные в компонент weather
            weather={this.state.weather}
            temp={this.state.temp}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            wind={this.state.wind}
            position={this.state.position}
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            cloudness={this.state.cloudness}
            visibility={this.state.visibility}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
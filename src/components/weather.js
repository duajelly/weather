import React from "react";

const Weather = props => (
    <div className="weather">
        {props.position &&
            <table class="table table-sm">
                <tbody>
                    <tr>
                        <td>Current position: </td>
                        <td>{props.position}</td>
                    </tr>
                    <tr>
                        <td>Weather: </td>
                        <td>{props.weather}</td>
                    </tr>
                    <tr>
                        <td>Cloudness: </td>
                        <td>{props.cloudness}</td>
                    </tr>
                    <tr>
                        <td>Visibility: </td>
                        <td>{props.visibility}</td>
                    </tr>
                    <tr>
                        <td>Tepereture: </td>
                        <td>{props.temp}</td>
                    </tr>
                    <tr>
                        <td>Pressure: </td>
                        <td>{props.pressure}</td>
                    </tr>
                    <tr>
                        <td>Humidity: </td>
                        <td>{props.humidity}</td>
                    </tr>
                    <tr>
                        <td>Wind: </td>
                        <td>{props.wind}</td>
                    </tr>
                    <tr>
                        <td>Sunrise: </td>
                        <td>{props.sunrise}</td>
                    </tr>
                    <tr>
                        <td>Sunset: </td>
                        <td>{props.sunset}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        }
        <p className="error">{props.error}</p>
    </div>
);

export default Weather;
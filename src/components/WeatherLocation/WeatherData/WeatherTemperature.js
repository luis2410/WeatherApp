import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { CLOUDY,CLEAR_DAY,CLEAR_NIGHT,PARTLY_CLOUDY_DAY,PARTLY_CLOUDY_NIGHT,RAIN,SLEET,SNOW,WIND,FOG } from '../../../constants/weathers';
import propTypes from 'prop-types'
import './styles.css'
const icons = {
[CLEAR_DAY]: "CLEAR_DAY",
[CLEAR_NIGHT]: "CLEAR_NIGHT",
[PARTLY_CLOUDY_DAY]: "PARTLY_CLOUDY_DAY",
[PARTLY_CLOUDY_NIGHT]: "PARTLY_CLOUDY_NIGHT",
[CLOUDY]: "CLOUDY",
[RAIN]: "RAIN",
[SLEET]: "SLEET",
[SNOW]: "SNOW",
[WIND]: "WIND",
[FOG]: "FOG"

}

const getWeatherIcon = weatherState => {

    const name = icons[weatherState];
    const sizeIcon = "4x"
    if (name)
        return <ReactAnimatedWeather className="wicon" icon={name} ></ReactAnimatedWeather>
    else
        return <ReactAnimatedWeather className="wicon" icon={"CLEAR_DAY"}></ReactAnimatedWeather>

};

const WeatherTemperature = ({temperature,weatherState}) => (

    <div className="weatherTemperatureCont aling-in-center">
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C° `}</span>
        {
            getWeatherIcon(weatherState)
        }
        
    </div>

);


WeatherTemperature.propTypes = {

    temperature:propTypes.number,
    weatherState:propTypes.string,

};

export default WeatherTemperature;
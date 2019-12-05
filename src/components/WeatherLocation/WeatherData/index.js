import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import { CLOUDY,CLEAR_DAY,CLEAR_NIGHT,PARTLY_CLOUDY_DAY,PARTLY_CLOUDY_NIGHT,RAIN,SLEET,SNOW,WIND,FOG } from '../../../constants/weathers'
import './styles.css'

const WeatherData = () => (

    <div className="weatherDataCont" >
        <WeatherTemperature temperature={20} weatherState={CLOUDY}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"20 m/s"}></WeatherExtraInfo>
        
    </div>

);

export default WeatherData;
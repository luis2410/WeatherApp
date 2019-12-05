import React from 'react';
import propTypes from 'prop-types';
import './styles.css'
const WeatherExtraInfo = ({humidity, wind}) => (

    <div className="weatherExtraInfoCont aling-in-center">
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} viento`}</span>
    </div>

);

WeatherExtraInfo.propTypes = {

    humidity : propTypes.number.isRequired, 
    wind: propTypes.string.isRequired,
};
export default WeatherExtraInfo;
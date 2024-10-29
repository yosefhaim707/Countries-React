import { useEffect, useRef, useState, FC } from "react";
import Country from "../types/Country";


const DetailedCountryCard : FC<Country> = (props: Country): JSX.Element => {
    return (
        <div className="detailed-card-main">
            <div className="detailed-card-left">
                <div className="detailed-card-left-head">
                    <h2 className="detailed-card-name">{props.name.common}</h2>
                    <p>Population: {props.population}</p>
                    <p>Capital: {props.capital[0]}</p>
                    <p>The borders: {props.borders.join(' ')}</p>
                    <p>Languages: {Object.values(props.languages).join(' ')}</p>
                    <button>Home</button>
                </div>
                <div className="detailed-card-left-bottom">
                    <img src= {props.flags.svg} alt={props.flags.alt} />
                </div>
            </div>
            <div className="detailed-card-right">
                
            </div>
        </div>
    )
}

export default DetailedCountryCard;
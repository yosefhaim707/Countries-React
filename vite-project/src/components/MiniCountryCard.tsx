import { useEffect, useRef, useState, FC } from "react";
import Country from "../types/Country";


const MiniCountryCard: FC<Country> = (props: Country): JSX.Element => {
    return (
        <div className="mini-card">
            <div className="mini-card-head">
                <img src={props.flags.svg} alt={props.flags.alt} />
            </div>
            <div className="mini-card-bottom">
                <p>name: {props.name.common}</p>
            </div>
        </div>
    )
}

export default MiniCountryCard
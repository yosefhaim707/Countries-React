import { FC } from "react";
import Country from "../types/Country";

type HeaderProp = {
    countries: Country[],
    element: JSX.Element,
    setter: Function
}


const Header: FC<HeaderProp> = (props: HeaderProp): JSX.Element => {
    const optionList = props.countries.map(country =>
        <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
    )
    
    
    
    return (
        <div className="navigation-main">
            <nav className="navbar">
                <h3>
                    <a href="">Home</a>
                </h3>
                <a href="">Israel</a>
                <a href="">USA</a>
                <a href="">France</a>
                <a href="">United Kingdom</a>
                <a href="">Thailand</a>
            </nav>
            <div className="search-section">
                <select defaultValue="1">
                    <option value="1" disabled hidden>Choose here</option>
                    {optionList}
                </select>
                <input type="text" />
                <button>Search</button>
            </div>
            <button onClick={() => props.setter(<h1>jfhdf</h1>)} >Free</button>
        </div>
    )
}

export default Header;
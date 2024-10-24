import { useState } from "react"
import styles from "./Input.module.css"
import { BiSearch, BiCurrentLocation } from "react-icons/bi"

export default function Input({setQuery, setUnits}){

    const [city, setCity] = useState('');

    const handleSearchClick = () => {
        if(city !== "") setQuery({ q: city });
    } 
    const handleLocationClick = () =>{
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords
                setQuery({lat:latitude, lon:longitude})
            })
        }
    } 

    
    return (
        <div className={styles.inputCover}>
            <div className={styles.inputDiv}>
                <input 
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    type="text" 
                    placeholder="Search by city..."
                />
                <BiSearch size={30} onClick={handleSearchClick}/>
                <BiCurrentLocation size={30} onClick={handleLocationClick} />
                <div className={styles.buttonDiv}>
                    <button onClick={() => setUnits("metric")}>°C</button>
                    |
                    <button onClick={() => setUnits("imperial")}>°F</button>
                </div>
            </div>
        </div>
    )
}
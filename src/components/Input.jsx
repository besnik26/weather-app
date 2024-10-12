import styles from "./Input.module.css"
import { BiSearch, BiCurrentLocation } from "react-icons/bi"

export default function Input(){
    return (
        <div className={styles.inputCover}>
            <div className={styles.inputDiv}>
                <input 
                    type="text" 
                    placeholder="Search by city..."
                />
                <BiSearch size={30}/>
                <BiCurrentLocation size={30} />
                <div className={styles.buttonDiv}>
                    <button>°C</button>
                    |
                    <button>°F</button>
                </div>
            </div>

        </div>
    )
}
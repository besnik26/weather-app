import styles from './TempAndDetails.module.css'
import { FaThermometerEmpty } from 'react-icons/fa'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FiWind } from 'react-icons/fi'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

export default function TempAndDetails(){

    const verticalDetails = [
        {
            id:1,
            Icon: FaThermometerEmpty,
            title: "Real feel",
            value: "22°"
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: "346%"
        },
        {
            id:3,
            Icon: FiWind,
            title: "Wind",
            value: "11 hm/h"
        },
    ]

    const horizontalDetails = [
        {
            id:1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: "05:33 AM"
        },
        {
            id:2,
            Icon: GiSunset,
            title: "Sunset",
            value: "08:33 PM"
        },
        {
            id:3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: "37°"
        },
        {
            id:3,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: "7°"
        }
    ]

    return (
        <div>
            <div className={styles.weatherDiv}>
                <p>Rain</p>
            </div>
            <div className={styles.main}>
                <img 
                    src="http://openweathermap.org/img/wn/01d@2x.png" 
                    alt="weather icon" 
                    className={styles.weatherImg}
                />
                <p className={styles.degree}>34°</p>
                <div  className={styles.detailsDiv}>
                    {
                        verticalDetails.map(({id, Icon, title, value})=>(

                        
                            <div key={id} className={styles.detail}>
                                <Icon size={18}/>
                                <p>{title}: <span>{value}</span></p>
                            </div>
                        
                        ))
                    }
                </div>
                
            </div>


            <div className={styles.horizontalDetails}>
                {horizontalDetails.map(({id, Icon, title, value})=>(
                    <div key={id} className={styles.horizontalDiv}>
                        <Icon size={30}/>
                        <p>{title}: <span>{value}</span></p>
                    </div>
                ))}
            </div>
        </div>

    )
}
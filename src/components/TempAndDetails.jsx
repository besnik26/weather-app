import styles from './TempAndDetails.module.css'
import { FaThermometerEmpty } from 'react-icons/fa'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FiWind } from 'react-icons/fi'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

export default function TempAndDetails({weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like
},
units

}){

    const verticalDetails = [
        {
            id:1,
            Icon: FaThermometerEmpty,
            title: "Real feel",
            value: `${feels_like.toFixed()}°`
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity}%`
        },
        {
            id:3,
            Icon: FiWind,
            title: "Wind",
            value: `${speed} ${ units === 'metric' ? 'km/h' : 'm/s'}`
        },
    ]

    const horizontalDetails = [
        {
            id:1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise
        },
        {
            id:2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset
        },
        {
            id:3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max.toFixed()}°`
        },
        {
            id:4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min.toFixed()}°`
        }
    ]

    return (
        <div>
            <div className={styles.weatherDiv}>
                <p>{details}</p>
            </div>
            <div className={styles.main}>
                <img 
                    src={icon}
                    alt="weather icon" 
                    className={styles.weatherImg}
                />
                <p className={styles.degree}>{`${temp.toFixed()}°`}</p>
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
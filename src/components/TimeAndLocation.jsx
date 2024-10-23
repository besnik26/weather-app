import styles from "./TimeAndLocation.module.css"

export default function TimeAndLocation({weather: {formattedLocalTime, name, country}}){
    return (
        <div>
            <div className={styles.timeDiv}>
                <p>
                    {formattedLocalTime}
                </p>
            </div>

            <div className={styles.locationDiv}>
                <p>
                    {`${name}, ${country}`}
                </p>
            </div>
        </div>
    )
}
import styles from "./TimeAndLocation.module.css"

export default function TimeAndLocation({weather: {formattedLocalTime, name, country}}){
    return (
        <div>
            <div className={styles.timeDiv}>
                <p>
                    Tuesday, 14 May 2024 | Local time: 07:21 AM
                    {formattedLocalTime}
                </p>
            </div>

            <div className={styles.locationDiv}>
                <p>
                    Berlin, DE
                </p>
            </div>
        </div>
    )
}
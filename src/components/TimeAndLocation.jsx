import styles from "./TimeAndLocation.module.css"

export default function TimeAndLocation(){
    return (
        <div>
            <div className={styles.timeDiv}>
                <p>
                    Tuesday, 14 May 2024 | Local time: 07:21 AM
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
import styles from "./Forecast.module.css"

export default function Forecast(){

    const data = [1,2,3,4,5];
    return (
        <div>
            <div className={styles.forecastTitleMain}>
                <p>3 hour step forecast</p>
            </div>
            <hr />
            <div className={styles.coverDiv}>
                {
                    data.map((data, index)=>(
                        <div className={styles.forecastDay} key={index}>
                            <p>Wed</p>
                            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />
                            <h4>12°</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
import styles from "./Forecast.module.css"

export default function Forecast({title, data}){

    return (
        <div>
            <div className={styles.forecastTitleMain}>
                <p>{title}</p>
            </div>
            <hr />
            <div className={styles.coverDiv}>
                {
                    data.map((d, index)=>(
                        <div className={styles.forecastDay} key={index}>
                            <p>{d.title}</p>
                            <img src={d.icon} alt="" />
                            <h4>{`${d.temp.toFixed()}°`}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
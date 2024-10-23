import styles from "./TopButton.module.css"
export default function TopButtons({setQuery}){
    const cities = [
        {
            id:1,
            name:'London'
        },
        {
            id:2,
            name:'Sydney'
        },
        {
            id:3,
            name:'Tokyo'
        },
        {
            id:4,
            name:'Paris'
        },
        {
            id:5,
            name:'Toronto'
        }
    ] 

    return (
        <div className={styles.buttonCover}>
            {cities.map((city)=>(
                <button 
                    className={styles.cityButton} 
                    key={city.id}
                    onClick={()=>{setQuery({q:city.name})}}
                >
                    {city.name}
                </button>
            ))}

        </div>
    )
}
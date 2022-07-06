import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {

    return (

        <div className={styles.container}>
            <h1 className={styles.title}>The Best Pizza in Town</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus dignissimos perspiciatis consequatur vitae mollitia cumque commodi at quo ipsa expedita, dolor similique repudiandae reiciendis! Inventore assumenda iusto minus voluptatum?</p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>

    )

}

export default PizzaList
import styles from '../styles/PizzaCard.module.css'
import Image from "next/image"

const PizzaCard = () => {

    return (
        <div className={styles.container}>
            <Image src="/img/chicago.png" alt="" width="500" height="500" />
            <h1 className={styles.title}>Fiori De Zucca</h1>
            <span className={styles.price}>$14.99</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )

}

export default PizzaCard
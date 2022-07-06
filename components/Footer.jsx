import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () =>  {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" alt="" layout="fill" objectFit='contain' />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <p className={styles.highlight}>WE MAKE THE BEST PIZZA IN TOWN !</p>
                </div>
                <div className={styles.card}>
                    <p>FIND OUR RESTAURANT</p>
                    <p className={styles.text}>
                        725 @Sierra Tower, New Avenue #304,
                        <br /> New York, 85002
                        120 222 432
                    </p>
                    <p className={styles.text}>
                        725 @Sierra Tower, New Avenue #304,
                        <br /> New Jersey, 85002
                        120 222 432
                    </p>
                    <p className={styles.text}>
                        725 @Sierra Tower, New Avenue #304,
                        <br /> North Hamsphere, 85002
                        120 222 432
                    </p>
                </div>
                <div className={styles.card}>
                    <p>WORKING HOURS</p>
                    <p className={styles.text}>
                        MONDAY UNTIL THRUSDAY
                        10:00AM - 11:00 PM
                        <br />
                    </p>
                    <p className={styles.text}>
                        FRIDAY UNTIL SUNDAY
                        <br/> 11:00 AM - 9:00 PM
                        <br />
                    </p>    
                </div>
            </div>
        </div>
    )
}

export default Footer
import Image from 'next/image'
import styles from '../../styles/Menu.module.css'

const Menu = () => {

    return (

        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.pizzahut}>
                            <Image src="/img/pizzahut.png" alt="" layout='fill'/>                    
                        </div>
                        <p>Pizza Hut</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.dominos}>
                            <Image src="/img/dominos.png" alt="" layout='fill'/>                    
                        </div>
                        <p>Dominos Pizza</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.caesars}>
                            <Image src="/img/caesars.png" alt="" layout='fill'/>                    
                        </div>
                        <p>Little Caesars</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.john}>
                            <Image src="/img/john.png" alt="" layout='fill'/>                    
                        </div>
                        <p>Papa Johns Pizaa</p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.imgContainer}>
                    
                </div>
            </div>
        </div>

    )

}

export default Menu
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (

        <div className={styles.container}>

            <div className={styles.item}>
                    <div className={styles.callButton}>
                        <Image src="/img/telephone.png" alt="telephone" width="70" height="70"/>
                    </div>

                    <div className={styles.texts}>
                        <div className={styles.textOrder}>ORDER NOW !</div>
                        <div className={styles.text}>012 233 333</div>
                    </div>
            </div> 

            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/">
                        <a className={styles.listItem} >Home</a>
                    </Link>
                    <Link href="/product/[id].jsx">
                        <a className={styles.listItem}>Products</a>
                    </Link>                    
                    <Image src="/img/pizza.png" alt="logo" width="75px" height="75px" className={styles.imgContainer}  />
                    <Link href = "/menu/menu">
                        <a className={styles.listItem}>Menu</a>
                    </Link>
                    <Link href = "/orders/[id].jsx">
                        <a className={styles.listItem}>Orders</a>
                    </Link>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Link href="/cart">
                        <Image src="/img/cart.png" alt='cart' width="30px" height="30px"  />
                    </Link>
                    <div className={styles.counter}>2</div>
                </div>
                
            </div>

        </div>
    )
}


export default Navbar
import styles from "../styles/Cart.module.css"
import Image from "next/image"

const Cart = () => {

    return (

        <div className={styles.container}>
                <div className={styles.left}>
                    <div styles={styles.row}>
                        <table className={styles.table}>
                            <tr className={styles.trTitle}>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Extras</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                            <tr className={styles.tr}>
                                <td>
                                    <div className={styles.imgContainer}>
                                        <Image
                                            src="/img/pepperoni pizza.png"
                                            layout="fill"
                                            objectFit="cover"
                                            alt=""
                                        />
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.name}>
                                        Pepperoni Pizza
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.extras}>Extra Ingredients, Double Sauce</span>
                                </td>
                                <td>
                                    <span className={styles.price}>$19</span>
                                </td>
                                <td>
                                    <span className={styles.quantity}>2</span>
                                </td>
                                <td>
                                    <span className={styles.total}>$38</span>
                                </td>
                            </tr>
                            <tr className={styles.tr}>
                                <td>
                                    <div className={styles.imgContainer}>
                                        <Image
                                            src="/img/margerita.png"
                                            layout="fill"
                                            objectFit="cover"
                                            alt=""
                                        />
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.name}>
                                        Margerita
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.extras}>Extra Ingredients, Double Sauce</span>
                                </td>
                                <td>
                                    <span className={styles.price}>$25</span>
                                </td>
                                <td>
                                    <span className={styles.quantity}>1</span>
                                </td>
                                <td>
                                    <span className={styles.total}>$25</span>
                                </td>
                            </tr>
                            <tr className={styles.tr}>
                                <td>
                                    <div className={styles.imgContainer}>
                                        <Image
                                            src="/img/chicago.png"
                                            layout="fill"
                                            objectFit="cover"
                                            alt=""
                                        />
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.name}>
                                        Chicago
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.extras}>Extra Ingredients, Double Sauce</span>
                                </td>
                                <td>
                                    <span className={styles.price}>$15</span>
                                </td>
                                <td>
                                    <span className={styles.quantity}>2</span>
                                </td>
                                <td>
                                    <span className={styles.total}>$30</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>CART TOTAL</h2>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Subtotal : </b> $79.60
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Discount :  </b> $0.00
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Total : </b> $79.60
                        </div>
                        <button className={styles.button}>CHECKOUT NOW!</button>
                    </div>
                </div>
        </div>

    )

}

export default Cart
import styles from './navbar.module.css'
import {useState} from 'react'
export default function Navbar(props){
    const [isShown, setIsShown] = useState(false);
        const handleCart = function(){
            setIsShown(current => !current)
        }
    return (
         <header>
            <div className={styles.headerWrapper}>
                <ul className={styles.navItems}>
                    <img className={styles.mobileMeny} src="meny.svg"></img>
                    <li><h3 className={styles.categoryTitle}>Sneakers</h3></li>
                    <li><a className={styles.meny}>Collections</a></li>  
                    <li><a className={styles.meny}>Men</a></li>
                    <li><a className={styles.meny}>Women</a></li>
                    <li><a className={styles.meny}>About</a></li>
                    <li><a className={styles.meny}>Contact</a></li>
                </ul>
                <div className={styles.cartNimage}>
                    <div className={styles.cart}>
                        <button className={styles.cartButton} onClick={handleCart}><img className={styles.shape} src="Shape.png"/></button>
                        {(isShown == false && (
                            <div className={styles.cartIconNum}>
                                <span className={styles.cartIconText} id="cartText">
                                    {props.confirmedAmount}
                                </span>
                            </div>
                        )
                        )}
                       
                    </div>
                    {isShown && (
                        <div className={styles.cartBox}>
                            <div className={styles.cartTitleWrapper}>
                                <span className={styles.cartTitle}>Cart</span>
                            </div>
                            {
                                props.confirmedAmount === 0 && (
                                    <div className={styles.emptyCart}>
                                        <span className={styles.emptyCartText}>Your cart is empty</span>
                                    </div>
                                )
                            }
                            {
                               props.confirmedAmount > 0 && (
                                    <div className={styles.cartContentWrapper}>
                                        <img src="cartimg.png" className={styles.cartImg}></img>
                                        <span className={styles.cartContentTitle}>Fall Limited Edition Sneakers</span>
                                        <span className={styles.cartInfoMainPrice}>$125.00</span> 
                                        <span className={styles.cartInfo}>{props.confirmedAmount ? props.confirmedAmount + "x" : ""} {props.confirmedAmount ? "$" +  125 * props.confirmedAmount : ""}</span>
                                        <button onClick={ () => props.resetCart()} className={styles.path}><img src="path.svg"></img></button>
                                        <button className={styles.checkoutBtn}>
                                        <span className={styles.checkoutBtnText}>Checkout</span>
                                    </button>
                                </div>
                                )
                            }
                           
                        </div>
                    )}
                <img className={styles.oval} src="Oval.png"></img>
            </div>
                <img className={styles.rectangle} src="Rectangle.png"></img>
            </div>
        </header>
        
    )
}
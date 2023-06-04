import styles from "./mainInfoSection.module.css"
import { useState, useEffect } from "react";
import ConfirmButton from "./ConfirmButton";
export default function MainInfoSection(props){
    useEffect(()=>{
        document.getElementById("itemNum").textContent = props.cart;
    })

   
    
    return (
        <div className={styles.rightWrapper}>
            <h4 className={styles.sneakersCompany}>SNEAKERS COMPANY</h4>
            <h2 className={styles.itemHeader}>Fall Limited Edition Sneakers</h2>
            <p className={styles.itemInfo}>These low-profile sneakers are your perfect casual weak companion. Featuring a durable rubber outer sole. they'll withstand everything the weather can offer.</p>
            <div className={styles.pricing}>
                <strong className={styles.newPrice}>$125.00</strong>
                <div className={styles.pricePercent}><span>50%</span></div>
                <span className={styles.originalPrice}>$250.00</span>
            </div>
            <div className={styles.addingContentWrapper}>
                <div className={styles.plusMinusWrapper}>
                    <div className={styles.plusMinus}>
                        <button className={styles.addingOrRemoving} onClick={() => props.minus()}>-</button>
                        <span className={styles.itemNum} id="itemNum">0</span>
                        <button className={styles.addingOrRemoving} onClick={() => props.plus()}>+</button>
                    </div>
                    <ConfirmButton confirmCartAmount={props.confirmCartAmount}/>
                </div>
            </div>
        </div>
)}
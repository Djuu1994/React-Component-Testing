import React from 'react';
import styles from "./confirmButton.module.css"
const ConfirmButton = (props) => {
    
    const handleConfirmClick = () => {
        props.confirmCartAmount();
      };
    return (
        <div className={styles.addButtonWrapper} onClick={() => handleConfirmClick()}>
            <img className={styles.basket} src="Shape.svg"></img>
            <span className={styles.addButton}>Add To Cart</span>
        </div>
    )
}


export default ConfirmButton;
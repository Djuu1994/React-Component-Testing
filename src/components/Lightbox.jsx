import styles from './lightbox.module.css' 
export default function Lightbox(){
    return (
        <div className={styles.leftWrapper}>
            <img className={styles.mainImage} src="shoe1.png"></img>
            <div className={styles.imagesList}>
                <img src="shoe1.png"></img>
                <img src="shoe2.png"></img>
                <img src="shoe3.png"></img>
                <img src="shoe4.png"></img>
            </div>
        </div> 
    )
}
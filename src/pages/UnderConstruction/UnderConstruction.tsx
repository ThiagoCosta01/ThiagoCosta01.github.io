import Navbar from "../../components/layout/Navbar/Navbar";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./UnderConstruction.module.css"
import underConstructionPicture from "../../assets/images/under_construction.png"

export default function UnderConstruction() {
    const { t } = useLanguage();

    return (
        <>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>{t.underConstruction.text}</p>
                    </div>
                    <div className={styles.picture}>
                        <img src={underConstructionPicture} alt="" />
                    </div>
                </div>
            </div>


        </>
    )
}
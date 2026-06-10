import Navbar from "../../components/layout/Navbar/Navbar"
import AboutMeSection from "../../components/ui/AboutMeSection/AboutSection"
import IntroductionSection from "../../components/ui/IntroductionSection/IntroductionSection"
import ProjectsList from "../../components/ui/ProjectsList/ProjectsList"
import styles from "./Home.module.css"


export default function Home() {
    return (
        <>
            <Navbar />

            <div className={styles.container}>
                <IntroductionSection />
            </div>
            <AboutMeSection />
            <ProjectsList />
            // Seção Skills

        </>
    )
}
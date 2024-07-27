import { useEffect } from "react"
import Button from "../../componens/Button/Button"
import Header from "../../componens/Header/Header"
import Hero from "../../componens/Hero/Hero"
import Points from "../../componens/Points/Points"
import Table from "../../componens/Table/Table"
import styles from './UserPage.module.scss'

function UserPage() {

    useEffect(() => {

        const calculateZoom = () => {
            const windowWidth = window.innerWidth;
            const contentWidth = 1926;
            const newZoom = windowWidth / contentWidth;
            (document.body.style as any).zoom = `${newZoom * 100}%`
        };

        calculateZoom();

    }, []);


    return (
        <div className={styles.page_container}>
            <Header />
            <main>
                <Hero />
                <Points />
                <Table />
                <Button />
            </main>
        </div>
    )
}

export default UserPage
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'


const Color = () => {

    const {word, tColor, bColor} = useParams()

    const dynamicStyle = {
        backgroundColor: bColor,
        color: tColor,
        width: "100%",
        margin: "auto",
        height: "60px"
    }

    return (
        <div className={styles.container}>
            <div style={dynamicStyle}>
                <h1 >The word is: {word}</h1>
            </div>
        </div>
    )
}

export default Color

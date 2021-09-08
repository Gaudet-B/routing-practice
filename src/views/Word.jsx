import { useParams } from 'react-router-dom'
import styles from './styles.module.css'


const Word = () => {

    const {word} = useParams()

    return (
        <div className={styles.container}>
            <h1>The word is: {word}</h1>
        </div>
    )
}

export default Word

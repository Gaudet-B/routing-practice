import { useParams } from 'react-router-dom'
import styles from './styles.module.css'


const Number = () => {

    const {id} = useParams()

    return (
        <div className={styles.container}>
            <h1>The number is: {id}</h1>
        </div>
    )
}

export default Number

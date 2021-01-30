import styles from "./test.module.css"

const Test = props => <p className={styles.small}>{props.children}</p>

export default Test

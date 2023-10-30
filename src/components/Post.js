import styles from './Post.module.css'

export default function Post({ list }) {

    return (
        <div className={styles.mainContainer}>
            {
                list && list.map((item, index) => {
                    return (
                        <div key={index} className={styles.container}>
                            <h1 className={styles.header}>{item.title[0].toUpperCase() + item.title.slice(1)}</h1>
                            <p>By: <a href="" className={styles.author}>Leanne Graham</a></p>
                            <p className={styles.body}>{item.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
import styles from './Tweet.module.css'

export default function Tweet({ tweet }) {

    const {user} = tweet;

    return (
        <div className={styles['tweet-container']}>            
            <img 
                src = {user.picture} 
                alt={user.user}
                className={styles['avatar']} 
            />
            <div className={styles['user']}>
                <span className={styles['user-name']}>{user.name}</span>{' '}
                <span className={styles['user-username']}>
                    @{user.username}
                </span>
                <span className={styles['date']}> - {tweet.date}</span>
            </div>
            <div className={styles['tweet']}>
                {tweet.text}      
            </div>
        </div>
    );
}
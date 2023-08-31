import styles from './Card.module.css';

const Card = ({ displayName, bio }) => (
  <div className={styles.card}>
    <h4 className={styles['display-name']}>{displayName}</h4>
    <p className={styles.bio}>{bio}</p>
  </div>
);


export default Card;
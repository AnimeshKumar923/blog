import styles from "./BlogCard.module.css";

export default function BlogCard({ name, date }) {
  return (
    <div className={`card ${styles.card}`}>
      <img src="https://picsum.photos/300/200" alt="" className={styles.img}/>
      <p>{date}</p>
      <h2>{name}</h2>
    </div>
  );
}

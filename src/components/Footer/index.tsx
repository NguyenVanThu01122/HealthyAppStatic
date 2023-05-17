import { footer } from "./data";
import styles from "./index.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            {footer.map(item => <div key={item.id} onClick={() => window.location.assign(item.url)}>{item.text}</div>)}
        </div>
    )
}

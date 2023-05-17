import styles from "./index.module.css";

export default function Hex({ hex }: { hex: HexCard }) {
    return (
        <div className={styles.hex}>
            <img src={hex.icon} alt="iconHex" />
            <span>{hex.text}</span>
        </div>
    )
}

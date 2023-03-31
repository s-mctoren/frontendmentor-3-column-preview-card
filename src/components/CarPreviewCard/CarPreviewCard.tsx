import { CarPreview } from "../../modules/CarPreview.interface";
interface CarPreviewCardProps {
  data: CarPreview;
}
import styles from "./CarPreviewCard.module.css"

export function CarPreviewCard(props: CarPreviewCardProps) {
  return (
    <div className={styles.card}>
      <p>{props.data.title}</p>
      <p>{props.data.description}</p>
      <p>{props.data.iconURL}</p>
      <p>{props.data.backgroundClass}</p>
    </div>
  );
}

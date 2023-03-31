import { CarPreview } from "../../modules/CarPreview.interface";
import { CarPreviewCard } from "../CarPreviewCard/CarPreviewCard";
import styles from "./CarContainer.module.css" 

const carsData: CarPreview[] = [
  {
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    iconURL: "string",
    backgroundClass: "string",
  },
  {
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    iconURL: "string",
    backgroundClass: "string",
  },
  {
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    iconURL: "string",
    backgroundClass: "string",
  },
];

export function CarContainer() {
  return (
    <main className={styles.container}>
      {carsData.map((el) => (
        <CarPreviewCard data={el} key={el.title} />
      ))}
    </main>
  );
}

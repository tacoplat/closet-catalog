import { Card } from "@mui/material";
import styles from "./styles.module.scss";
import CardContentWrapper from "../card-content-wrapper/component";

interface PieceDetails {
  colors: string[];
  material: string;
  price?: number;
  manufacturer?: string;
}

export interface Piece {
  id: number;
  name: string;
  displayName: string;
  category: string;
  imageUrl?: string;
  acquireDate?: string;
  details?: PieceDetails;
}

interface InventoryContainerProps {
  items?: Piece[];
}

const InventoryContainer: React.FC<InventoryContainerProps> = ({ items }) => {
  return (
    <div className={styles.inventoryContainer}>
      {items?.map((item) => (
        <CardContentWrapper piece={item} />
      ))}
    </div>
  );
};

export default InventoryContainer;

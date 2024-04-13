import { Card, CardContent, Typography } from "@mui/material";
import { Piece } from "../inventory-container/component";
import Image from "next/image";

import styles from "./styles.module.scss";
import picture from "@/assets/fallback.jpg";

interface CardContentWrapperProps {
  piece: Piece;
}

const FALLBACK_IMAGE_URL = picture;

const CardContentWrapper: React.FC<CardContentWrapperProps> = ({ piece }) => {
  return (
    <Card className={styles.card} variant="outlined">
      <CardContent className={styles.cardContent}>
        <Image
          src={piece.imageUrl || FALLBACK_IMAGE_URL}
          width={240}
          height={240}
          alt={piece.name}
        />
        <div>
          <Typography sx={{ fontSize: "1.6rem" }} className={styles.pieceTitle}>
            {piece.displayName}
          </Typography>
          <Typography variant="subtitle2">{piece.category}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardContentWrapper;

import { Button } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import styles from "./styles.module.scss";

const InventoryActions: React.FC = () => {
  return (
    <div className={styles.inventoryActions}>
      <Button variant="contained" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
        Add Piece
      </Button>
    </div>
  );
};

export default InventoryActions;

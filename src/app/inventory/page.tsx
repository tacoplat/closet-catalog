import React from "react";
import { Typography } from "@mui/material";
import InventoryContainer, {
  Piece,
} from "./components/inventory-container/component";
import InventoryActions from "./components/inventory-actions/component";

const testItems: Piece[] = [
  {
    id: 1,
    name: "test_sweater",
    displayName: "Mohair Tennis Sweater",
    category: "knitwear",
  },
  {
    id: 2,
    name: "test_shirt",
    displayName: "Long Sleeve Shirt",
    category: "shirts",
  },
  {
    id: 3,
    name: "test_pants",
    displayName: "Workgear Trouser Twill",
    category: "pants",
  },
];

const InventoryPage: React.FC = () => {
  return (
    <>
      <Typography variant="h1">Inventory</Typography>
      <InventoryActions />
      <InventoryContainer items={testItems} />
    </>
  );
};

export default InventoryPage;

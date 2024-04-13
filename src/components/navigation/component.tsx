"use client";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const Navigation: React.FC = () => {
  const router = useRouter();

  const goTo = (path: string) => () => {
    router.replace(path);
  };

  return (
    <div className={styles.bottomNavigation}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Inventory"
          onClick={goTo("/inventory")}
        />
        <BottomNavigationAction
          label="Outfit Builder"
          onClick={goTo("/builder")}
        />
      </BottomNavigation>
    </div>
  );
};

export default Navigation;

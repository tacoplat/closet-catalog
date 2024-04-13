import { TypographyOptions } from "@mui/material/styles/createTypography";
import { IBM_Plex_Sans } from "next/font/google";

const font = IBM_Plex_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const typography: Partial<TypographyOptions> = {
  fontFamily: font.style.fontFamily,
  allVariants: {
    userSelect: "none",
    msUserSelect: "none",
    WebkitUserSelect: "none",
  },
  h1: {
    fontSize: "4rem",
    fontWeight: 600,
  },
  h2: {
    fontSize: "3.6rem",
  },
  h3: {
    fontSize: "3rem",
  },
  h4: {
    fontSize: "2.6rem",
  },
  h5: {
    fontSize: "2.2rem",
  },
  h6: {
    fontSize: "2rem",
  },
};

export default typography;

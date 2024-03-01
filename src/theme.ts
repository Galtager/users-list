import { createTheme } from "@mui/material";
declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const FONT_PRIMARY = 'Assistant, sans-serif';

export const theme = createTheme({
    typography: {
        fontFamily: FONT_PRIMARY,
        body1: {
            fontSize: "16px",
            fontWeight: 500,
            color: "rgb(102 109 118)"
        },
        body2: {
            fontWeight: 700,
            color: "rgb(68 73 79)",
            fontSize: "16px"
        },
        subtitle1: {
            fontWeight: 700,
            color: "#000",
            fontSize: "2rem"
        }

    }

});


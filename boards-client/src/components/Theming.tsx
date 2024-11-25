import { createTheme } from "@mui/material";

export const theme = createTheme(
    {
        palette: {
            mode: 'light',
            primary: {
                main: '#4d11ff',
            },
            secondary: {
                main: '#2c6aea',
            },
            background:
            {
                default: '#ffffff',
                paper: '#fefefe'
            },
            text:
            {
                primary: "#ffffff",
                secondary: "#000000"
            }
        },

        typography:
        {
            fontFamily: "inherit"
        },

        spacing: [0, 0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256],
    })
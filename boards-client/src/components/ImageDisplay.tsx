import React, { useState } from "react"
import { Button, Container, Divider, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { theme } from "./Theming";
import internal from "stream";


export interface DisplayProps {
    images: string[]
    cols: number
}


export function ImageDisplay(props: DisplayProps) {
    const navigate = useNavigate();

    return (

        <Container style={{ flex: 1, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>

                <ImageList sx={{ height: 400, verticalAlign: "text-top" }} cols={props.cols}>
                    {props.images.map((item) => (
                        <ImageListItem key={item}>
                            <img
                                srcSet={item}
                                src={item}
                                alt={"Error loading Screenshot"}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </ Container >
        </ Container >

    )
};

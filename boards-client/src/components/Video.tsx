import React from "react"
import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ReactPlayer from "react-player";
import { theme } from "./Theming";

export interface VideoProps {
    url: string
}


export function Video(props: VideoProps) {

    return (
        <Container style={{ flex: 1, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize, }}>
            <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                <Container style={{ marginTop: 50, marginBottom: 60 }}>
                    <ReactPlayer url={props.url} width={'100%'} />
                </Container>
            </Container>
        </ Container >
    )
};

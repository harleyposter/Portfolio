import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import GSLogo from '../../assets/GemScapesLogo2.png';
import { Features } from '../../components/Features';
import { theme } from '../../components/Theming';
import { Video } from '../../components/Video';
import { ImageDisplay } from '../../components/ImageDisplay';

import GSTitle from '../../assets/GemScape/GSTitle.png'
import GSL1 from '../../assets/GemScape/GSLevel.png'
import GSL2 from '../../assets/GemScape/GSLevel2.png'
import GSL3 from '../../assets/GemScape/GSLevel3.png'

function GemScapePage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        GEMSCAPE
                    </Container>
                </Container>
                <Container style={{ backgroundColor: "#ffffff50", padding: 5, margin: 20, width: 500 }}>
                    <img src={GSLogo} height={300} />
                </Container>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        Made by Aidan Davidson
                    </Container>
                </Container>
                <Stack width={"80%"}>
                    <Stack direction='row' >

                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <Stack>
                                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                                    DESCRIPTION
                                </Container>
                                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h5.fontSize, textAlign: "left" }}>
                                    Gemscape is an experimental 3D Platformer that allows players to change their gravity.
                                    Click on a wall to change your gravity to it, then jump to another.
                                    Explore the procedurally generated gemscape to collect gems, which give you points.
                                    The gems will slowly decay over time, with blue being the most stable, and red breaking on contact.
                                    You lose a life when you fall out of bounds. Get as many points as you can in 5 lives.
                                    Enjoy a simple, yet mindbending experience in Gemscape. Up does not have to up, and down does not have to be down.
                                </Container>
                            </Stack >
                        </ Container >
                        <Features features={["Experimental 3D platforming", "Control gravity", "Procedurally generated levels", "Simple controls, but complex movement"]} />

                    </Stack>
                    <Stack direction='row' >
                        <Video title={"Gameplay"} url={"https://youtu.be/lybdne0qclw"} />
                        <ImageDisplay title={"Screenshots"} images={[GSTitle, GSL2, GSL1, GSL3]} cols={1} />
                    </Stack>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", width: "50%", marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <a href="https://drive.google.com/file/d/1JJ5YuU3SaShoFJDSw6Fmv9h25Suhu3mS/view?usp=sharing" target="_blank" >
                                Download the Source Code Here!
                            </a>
                        </Container>
                    </Container>
                </Stack>
            </header>
        </div>
    );
}

export default GemScapePage;
import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import GWLogo from '../../assets/GroundwardLogo3.png';
import { Features } from '../../components/Features';
import { theme } from '../../components/Theming';
import { Video } from '../../components/Video';
import { ImageDisplay } from '../../components/ImageDisplay';

import GWTower from '../../assets/Groundward/GWTower.png'
import GWTower3D from '../../assets/Groundward/GWTower3D.png'

function GroundwardPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        GROUNDWARD
                    </Container>
                </Container>
                <Container style={{ backgroundColor: "#ffffff50", padding: 5, margin: 20, width: 460 }}>
                    <img src={GWLogo} height={300} />
                </Container>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h5.fontSize }}>
                        Made by Aidan Davidson, Dylan Mudersbach, Maximos Dauod, and Orion Evans
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
                                    Groundward is a spiritual successor to the 2012 Game FEZ.
                                    Groundward takes place in a deep, mystical, and confusing cave. Once trapped inside, the only way forward is down.
                                    Explore through the strange environments to find a way deeper. Discover markings of an ancient species.
                                    Restore life to the caves through the power of music.
                                    Write down and review information in your notebook, along with charting your path.
                                    Meet other cave explorers and help them with their problems. Collect eeriely familiar relics.
                                    Most importantly, find a way out.
                                </Container>
                            </Stack >
                        </ Container >
                        <Features features={["Mindbending 2.5D platforming", "7 distinct biomes", "Hundreds of unique rooms", "Secret codes and cyphers to learn", "A quiet, but rich story"]} />

                    </Stack>
                    <Stack direction='row' >
                        {<Video title={"Trailer"} url={"https://www.youtube.com/watch?v=G9CGZUBJ9GU"} />}
                        <ImageDisplay title={"Screenshots"} images={[GWTower, GWTower3D]} cols={2} />
                    </Stack>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", width: "40%", marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <a href="https://showcase.codeday.org/project/cklmz56h3150606411qf8p59vdrv" target="_blank" >
                                Visit the CodeDay Page!
                            </a>
                        </Container>
                    </Container>
                </Stack>
            </header>
        </div>
    );
}

export default GroundwardPage;
import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import STPCLogo from '../../assets/STPCLogo2.png';
import { Features } from '../../components/Features';
import { theme } from '../../components/Theming';
import { Video } from '../../components/Video';
import { ImageDisplay } from '../../components/ImageDisplay';

import STPCTitle from '../../assets/STPC/STPCTitle.png'
import STPCLab from '../../assets/STPC/STPCLab.png'
import STPCBun1 from '../../assets/STPC/STPCBunker1.png'
import STPCBun2 from '../../assets/STPC/STPCBunker2.png'
import STPCQuar from '../../assets/STPC/STPCQuarantine.png'

function STPCPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ width: 700, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        SUBTERRANEAN PHYSICS COMPLEX
                    </Container>
                </Container>
                <Container style={{ backgroundColor: "#ffffff50", padding: 5, margin: 20, width: 310 }}>
                    <img src={STPCLogo} height={300} />
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
                                    Subterranean Physics Complex is a quick reset 2D platformer inspired by Celeste and Super Meat Boy.
                                    Explore and jump through an abandoned underground laboratory looking for old technology.
                                    Use the Grapple Magnet to traverse through 4 different levels. Read each room and find a path to move through.
                                    Time your jumps and grapples to pass obstacles and avoid hazards. Collect optional USBs to uncover the secret in each level.
                                    Find the secret to unlock special effects, and the secret fourth level. Speedrun through for an extra challenge!
                                </Container>
                            </Stack >
                        </ Container >
                        <Features features={["Quick 2D Platforming", "4 Levels with unique mechanics", "Optional Collectibles", "Level Specific Secrets", "Speedrun Timers and Statistics"]} />

                    </Stack>
                    <Stack direction='row' >
                        <Video title={"Gameplay"} url={"https://youtu.be/1AxDxRrdXSk"} />
                        <ImageDisplay title={"Screenshots"} images={[STPCTitle, STPCBun1, STPCLab, STPCBun2, STPCQuar]} cols={1} />
                    </Stack>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", width: "40%", marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <a href="https://harleyposter.itch.io/subterranean-physics-complex" target="_blank" >
                                Visit the Itch.io Page!
                            </a>
                        </Container>
                    </Container>
                </Stack>
            </header>
        </div>
    );
}

export default STPCPage;
import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import PHLogo from '../../assets/PowerHouseLogo2.png';
import { Features } from '../../components/Features';
import { theme } from '../../components/Theming';
import { Video } from '../../components/Video';
import { ImageDisplay } from '../../components/ImageDisplay';

import PHTitle from '../../assets/PowerHouse/PHTitle.png'
import PHMenu from '../../assets/PowerHouse/PHMenu.png'
import PHTool from '../../assets/PowerHouse/PHTool.png'
import PHReactor from '../../assets/PowerHouse/PHReactor.png'
import PHLake from '../../assets/PowerHouse/PHLake.png'
import PHItems from '../../assets/PowerHouse/PHItems.png'

function PowerHousePage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        POWERHOUSE
                    </Container>
                </Container>
                <Container style={{ backgroundColor: "#ffffff50", padding: 5, margin: 20, width: 500 }}>
                    <img src={PHLogo} height={300} />
                </Container>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        Made by Aidan Davidson and Maximos Dauod
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
                                    Powerhouse is a 2D action adventure platformer inspired by the original Metroid! You find yourself at your fathers manor, and he is trapped.
                                    Explore the hazardous home of your father. Explore his Laboratory in the middle of the lake!
                                    Traverse the lakebed fighting off strange marine life. Borrow his high tech equipment to blast through his security systems!
                                    Launch plasma bolts and long rails from your power glove. Block attacks or grapple with the umbrella.
                                    Fight corrupted machines as bosses to release the lockdown! Reboot the critical systems to reach the reactor
                                    "Repair" the reactor to restart the power and rescue your father. Then make it out alive!
                                </Container>
                            </Stack >
                        </ Container >
                        <Features features={["Original Metroid Style Action", "Fun and Simple Story", "3 Large Levels to Explore", "5 Unique Boss Fights and dozens of enemies", "12+ Unique Upgrades", "Shortcuts and Hidden Techniques"]} />

                    </Stack>
                    <Stack direction='row' >
                        <Video title={"Gameplay"} url={"https://www.youtube.com/watch?v=0YSHUuXCwtI"} />
                        <ImageDisplay title={"Screenshots"} images={[PHTitle, PHTool, PHMenu, PHReactor, PHLake, PHItems]} cols={1} />
                    </Stack>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", width: "40%", marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            Coming Soon!
                        </Container>
                    </Container>
                </Stack>
            </header>
        </div>
    );
}

export default PowerHousePage;
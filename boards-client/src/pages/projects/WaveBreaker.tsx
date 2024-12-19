import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import WBLogo from '../../assets/WaveBreaker.png';
import { Features } from '../../components/Features';
import { theme } from '../../components/Theming';
import { Video } from '../../components/Video';
import { ImageDisplay } from '../../components/ImageDisplay';

import WBTitle from '../../assets/WaveBreaker/WBTitle.png'
import WBSG from '../../assets/WaveBreaker/WBShotgun.png'
import WBAR from '../../assets/WaveBreaker/WBAR.png'


function WaveBreakerPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        Wave Breaker
                    </Container>
                </Container>
                <Container style={{ backgroundColor: "#ffffff50", padding: 5, margin: 20, width: 500 }}>
                    <img src={WBLogo} height={300} />
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
                                    Wave Breaker is a thrid person shooter wave survival game.
                                    The goal is to make it 25 waves with 5 lives, while managing your ammo.
                                    Pick up stronger weapons, ammo, and health, all while fighting stronger and stronger enemies.

                                    Try to survive as long as possible!<br /> <br /> <br /> <br />

                                </Container>
                            </Stack >
                        </ Container >
                        <Features features={["25 escalating waves", "4 unique enemies", "3 different weapons"]} />

                    </Stack>
                    <Stack direction='row' >
                        <Video title={"Gameplay"} url={"https://youtu.be/oLd-l5KvXPw"} />
                        <ImageDisplay title={"Screenshots"} images={[WBTitle, WBAR, WBSG]} cols={1} />
                    </Stack>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", width: "50%", marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <a href="https://drive.google.com/file/d/1aUhH3iMWydPpX-AUf5626RAnq6WSgUqq/view?usp=sharing" target="_blank" >
                                Download the Source Code Here!
                            </a>
                        </Container>
                    </Container>
                </Stack>
            </header>
        </div>
    );
}

export default WaveBreakerPage;
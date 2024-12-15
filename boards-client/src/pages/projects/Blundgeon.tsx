import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import BGLogo from '../../assets/BlundgeonLogo2.png';
import { Features } from '../../components/Features';
import { theme } from '../../components/Theming';
import { Video } from '../../components/Video';
import { ImageDisplay } from '../../components/ImageDisplay';

import BGItems from '../../assets/Blundgeon/BGItems.png'
import BGInv from '../../assets/Blundgeon/BGInventory.png'
import BGChest from '../../assets/Blundgeon/BGChest.png'
import BGPlayer from '../../assets/Blundgeon/BGPlayer.png'

function BlundgeonPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        BLUNDGEON
                    </Container>
                </Container>
                <Container style={{ backgroundColor: "#ffffff50", padding: 5, margin: 20, width: 460 }}>
                    <img src={BGLogo} height={300} />
                </Container>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        Made by Aidan Davidson, Dylan Mudersbach, and Maximos Dauod
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
                                    Blundgeon is an odd combination of Doom 1993 and the RPG Roguelike genres, creating a fast paced FPS against other players.
                                    Switch between boosting stats off of monsters and hunting down other players. If you can't beat them, better outrun them.
                                    Loot from over 100 different weapons, spells, and items. Wipe everyone out in your path, or engage in stealth and build traps for your opponents.
                                    Don't get too comfortable! One of the four biomes will be destroy every few minutes. When they are all gone, fight to the death in one last arena.
                                </Container>
                            </Stack >
                        </ Container >
                        <Features features={["Fast Arena Shooter Movement", "4 Special Classes", "Crazy PvE and PvP Gameplay", "Over 700 Detailed Sprites", "4-16 Lobby Multiplayer Mayhem"]} />

                    </Stack>
                    <Stack direction='row' >
                        <Video title={"Trailer"} url={"https://youtu.be/u5oEAMnwilE"} />
                        <ImageDisplay title={"Screenshots"} images={[BGItems, BGInv, BGChest, BGPlayer]} cols={1} />
                    </Stack>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", width: "40%", marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <a href="https://showcase.codeday.org/project/ckpsw4i9w26966510qugzd3bo1u" target="_blank" >
                                Visit the CodeDay Page!
                            </a>
                        </Container>
                    </Container>
                </Stack>
            </header>
        </div>
    );
}

export default BlundgeonPage;
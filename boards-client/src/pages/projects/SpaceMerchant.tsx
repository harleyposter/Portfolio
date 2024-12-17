import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import SMLogo from '../../assets/SpaceMerchantThumbnail2.png';
import { Features } from '../../components/Features';
import { theme } from '../../components/Theming';
import { Video } from '../../components/Video';
import { ImageDisplay } from '../../components/ImageDisplay';

import SMSS1 from '../../assets/SpaceMerchant/SMSS1.png'
import SMTitle from '../../assets/SpaceMerchant/SMTitle.png'
import SMMenu1 from '../../assets/SpaceMerchant/SMMenu.png'
import SMMenu2 from '../../assets/SpaceMerchant/SMMenu2.png'

function SpaceMerchantPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ width: 500, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        SPACE MERCHANT
                    </Container>
                </Container>
                <Container style={{ backgroundColor: "#ffffff50", padding: 5, margin: 20, width: 400 }}>
                    <img src={SMLogo} height={300} />
                </Container>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        Made by Aidan Davidson and Dylan Mudersbach
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
                                    Space Merchant is a resource management shoot-em-up game, with a death based progression system that rewards endurance.
                                    {'\t'} The player has to maneuver about and destroy an oncoming barrage of asteroids, ships, and bosses to collect metal and upgrade their ship.
                                    Each day you must manage your ammo and metal capacity, or spare metal to create more ammo mid flight.
                                    Your goal is to survive as many days as possible and collect as much metal as possible each day.
                                    After each day, enter a shop to sell metal, repair your ship, or purchase upgrades.
                                    Every once in a while you must fight a challenging boss with unique attacks.
                                    If you lose, you start back at day one, with the ability to buy permanent upgrades, new weapons, and new looks! Grow strong and grow rich!
                                </Container>
                            </Stack >
                        </ Container >
                        <Features features={["Galaga-style shoot-em-up gameplay", "Resource management of materials and ammo", "Run-based upgrades", "3 unique bosses", "Permanent progression", "Cosmetic customization", "Unlockable skill trees"]} />

                    </Stack>
                    <Stack direction='row' >
                        <Video title={"Trailer"} url={"https://youtu.be/fpnH0ytoCMA"} />
                        <ImageDisplay title={"Screenshots"} images={[SMTitle, SMSS1, SMMenu1, SMMenu2]} cols={2} />
                    </Stack>
                    <Stack direction={"row"}>
                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", width: "40%", marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                                <a href="https://harleyposter.itch.io/space-merchant" target="_blank" >
                                    Visit the Itch.io Page!
                                </a>
                            </Container>
                        </Container>
                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", width: "40%", marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                                <a href="https://drive.google.com/file/d/1XmMSkCvL0qhe5dHPELS7nV58hnUbuI35/view?usp=drive_link" target="_blank" >
                                    Check out the Source Code!
                                </a>
                            </Container>
                        </Container>
                    </Stack>
                </Stack>
            </header >
        </div >
    );
}

export default SpaceMerchantPage;
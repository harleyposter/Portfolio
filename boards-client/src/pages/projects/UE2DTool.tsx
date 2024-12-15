import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import UE2DLogo from '../../assets/UE52DCollisionToolLogo.png';
import { Features } from '../../components/Features';
import { theme } from '../../components/Theming';
import { Video } from '../../components/Video';
import { ImageDisplay } from '../../components/ImageDisplay';

import UE2DRef from '../../assets/UE2DTool/UE2DRef.png'
import UE2DMap from '../../assets/UE2DTool/UE2DMap.png'
import UE2DR1 from '../../assets/UE2DTool/UE2DRender1.png'
import UE2DR2 from '../../assets/UE2DTool/UE2DRender2.png'

function UE2DToolPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        UE5 2DTILEMAP++
                    </Container>
                </Container>
                <Container style={{ backgroundColor: "#ffffff50", padding: 5, margin: 20, width: 400 }}>
                    <img src={UE2DLogo} height={300} />
                </Container>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        Made by Aidan Davidson
                    </Container>
                </Container>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Stack >
                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            Student Innovation Project Information
                        </Container>
                        <Stack direction='row'>
                            <Stack>
                                <Container style={{ width: "80%", backgroundColor: theme.palette.secondary.main + "60", marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                                    Problem Statement
                                </Container>
                                <Container style={{ width: "90%", backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h5.fontSize, textAlign: "left" }}>
                                    &ensp;&ensp;&ensp;The Unreal Engine is a very powerful and robust engine. It is developer friendly, and capable of fulfilling many different projects. While it can provide impressive experiences, however, Paper2D leaves a lot to be desired.
                                    <br /><br />&ensp;&ensp;&ensp;Projects in 2D end up falling short due to its various graphical and developmental limitations. Some examples of these limitations include lack of lighting support for orthographic cameras, 3D to 2D collision, and 2D Physics. Instead, we see a lot of 2D developers utilize the Unity engine as it is more capable and effective with 2D environments.

                                </Container>
                            </Stack>
                            <Stack>
                                <Container style={{ width: "80%", backgroundColor: theme.palette.secondary.main + "60", padding: 10, marginBottom: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                                    Innovation Claim
                                </Container>
                                <Container style={{ width: "90%", backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h5.fontSize, textAlign: "left" }}>
                                    &ensp;&ensp;&ensp;These issues have been reported by various members of the Unreal Engine Community, and not much has been done to help Unreal users’ frustrations. I would like to develop a tool to both remedy issues with 2D collision and allow for less of a need to change engines.
                                    <br /><br />&ensp;&ensp;&ensp;For my Innovation Claim, I wish to develop a tool to enhance 2D development on the Unreal Engine. Specifically, I would like to handle collision in real time based on the camera. This would allow creative applications and design for Unreal 2D developers, as well as fast iteration for collision generation.

                                </Container>
                            </Stack>
                        </Stack>
                    </Stack >
                </ Container >

                <Stack width={"80%"}>
                    <Stack direction='row' >

                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <Stack>
                                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                                    DESCRIPTION
                                </Container>
                                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h5.fontSize, textAlign: "left" }}>
                                    Unreal Engine 5's 2DTileMap++ is a tool to assist in creation, editing, and customizing Paper2D Tilemaps outside of their default tools.
                                    2DTileMap++ allows for generating a tilemap from an inputed texture, allowing for use of more powerful outside tools, such as Adobe Photoshop.
                                    By filling out a reference table in the engine, 2DTileMap++ can convert the image data into a completely usable and styled TileMap instantly, all in the editor.
                                    2DTileMap++ also can create tilemaps from camera renders, creating a 2D slice from 3D models or collision channels. Plug everything in, and press go!
                                </Container>
                            </Stack >
                        </ Container >
                        <Features features={["Generate TileMaps from a Reference Texture", "Create Realtime TileMaps based on a Camera Render", "Use Custom Collision Channels to Make Masked Collision", "Easy to Use, Just Plug in and Initialize the Table", "Turns a Multiple Hour Project into 5-10 Minutes"]} />

                    </Stack>
                    <Stack direction='row' >
                        <Video url={"https://youtu.be/RYcVDUj6s08"} />
                        <ImageDisplay images={[UE2DMap, UE2DRef, UE2DR1, UE2DR2]} cols={1} />
                    </Stack>
                </Stack>
            </header>
        </div>
    );
}

export default UE2DToolPage;
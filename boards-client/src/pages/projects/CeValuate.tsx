import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Container, Stack } from '@mui/material';
import CeVLogo from '../../assets/CeValuateLogo.png';
import { Features } from '../../components/Features';
import { theme } from '../../components/Theming';
import { Video } from '../../components/Video';
import { ImageDisplay } from '../../components/ImageDisplay';

import CeVMain from '../../assets/CeValuate/CeVSS.png'
import CeVVal from '../../assets/CeValuate/CeVVal.png'

function CeValuatePage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        CEVALUATE
                    </Container>
                </Container>
                <Container style={{ backgroundColor: "#ffffff50", padding: 5, margin: 20, width: 460 }}>
                    <img src={CeVLogo} height={300} />
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
                                    CeValuate is a project to assist in calculating insurance claim valuations by gathering data and calculating values automatically.
                                    CeValuate takes in Claim Data from the Database, and displays the Items in the claim in a detailed list.
                                    CeValuate also manages an API handling Items, Item Lists, a Depreciation Reference Table for quick calculations
                                    CeValuate provides the oppertunity to edit Items, their valuation data, and their approval status in a front end environment.
                                    CeValuate will also provide a place for claimants to input their item information in a easy to use form rather than requiring a printed copy, and emailing back and forth.
                                    CeValuate will save a lot of time and resources on the time consuming, monotonous process in claim reviewing, allowing time to be devoted to more complex tasks and claims.

                                </Container>
                            </Stack >
                        </ Container >
                        <Features features={["Import Claim Information from the Database", "Utilize Web APIs to automatically find pricing for items", "Return value sources for adjuster review", "Display, Save, and Edit Item Claim Information from Front End App", "Automatically Calculate Item Valuation from Age, Depreciation, and Condition", "Provide a Document Export to Contain All Items and Information"]} />
                    </Stack>
                    <Stack direction='row' >
                        <ImageDisplay title={"Item List Display"} images={[CeVMain]} cols={1} />
                        <ImageDisplay title={"Valuation Menu"} images={[CeVVal]} cols={1} />
                    </Stack>
                </Stack>
            </header>
        </div>
    );
}

export default CeValuatePage;
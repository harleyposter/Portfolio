import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Boards from "./pages/Boards";
import SIP from "./pages/SIP";
import About from "./pages/About";
// eslint-disable-next-line import/no-webpack-loader-syntax
import { AppBar, Box, Button, Container, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { theme } from "./components/Theming"
import ADLogo from "./assets/AidanDavidsonLogo3.png"


import SpaceMerchantPage from './pages/projects/SpaceMerchant';
import PowerHousePage from './pages/projects/PowerHouse';
import STPCPage from './pages/projects/SubterraneanPhysicsComplex';
import BlundgeonPage from './pages/projects/Blundgeon';
import CeValuatePage from './pages/projects/CeValuate';
import GroundwardPage from './pages/projects/Groundward';
import UE2DToolPage from './pages/projects/UE2DTool';
import GemScapePage from './pages/projects/GemScape';
import WaveBreakerPage from './pages/projects/WaveBreaker';



function App() {
    // const [load, setLoad] = useState(false);
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme} >
            {<AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Container style={{ flex: 2, height: 100, padding: 5 }}>
                            <img color={"#fffffff"} height={"100%"} src={ADLogo} />
                        </Container>
                        <Box sx={{ flex: 1, display: { xs: 'none', sm: 'block' } }}>
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/Portfolio")}>
                                <Typography variant="h6" color="white" component="div">
                                    Projects
                                </Typography>
                            </Button>
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/Portfolio/SIP")}>
                                <Typography variant="h6" color="white" component="div">
                                    SIP
                                </Typography>
                            </Button>
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/Portfolio/About")}>
                                <Typography variant="h6" color="white" component="div">
                                    About Me
                                </Typography>
                            </Button>
                            {/*<Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/About")}>
                                <Typography variant="h6" color="white" component="div">
                                    Contact
                                </Typography>
                            </Button>*/}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>}




            <Routes>
                <Route path="/Portfolio" element={<Home />} />
                <Route path="/Portfolio/SIP" element={<UE2DToolPage />} />
                <Route path="/Portfolio/About" element={<About />} />

                <Route path="/Portfolio/SpaceMerchant" element={<SpaceMerchantPage />} />
                <Route path="/Portfolio/PowerHouse" element={<PowerHousePage />} />
                <Route path="/Portfolio/SubTerraneanPhysicsComplex" element={<STPCPage />} />
                <Route path="/Portfolio/Blundgeon" element={<BlundgeonPage />} />
                <Route path="/Portfolio/CeValuate" element={<CeValuatePage />} />
                <Route path="/Portfolio/Groundward" element={<GroundwardPage />} />
                <Route path="/Portfolio/UE2DTool" element={<UE2DToolPage />} />
                <Route path="/Portfolio/GemScape" element={<GemScapePage />} />
                <Route path="/Portfolio/WaveBreaker" element={<WaveBreakerPage />} />


            </Routes>
            <footer >@2024 Aidan Davidson All Rights Reserved</footer>
        </ThemeProvider >

    )
};

export default App;
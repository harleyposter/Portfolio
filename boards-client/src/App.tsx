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
import ADLogo from "./assets/AidanDavidsonLogo2.png"
import SpaceMerchantPage from './pages/projects/SpaceMerchant';
import { SpaceMerchant } from './components/Project';





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
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/Projects")}>
                                <Typography variant="h6" color="white" component="div">
                                    Projects
                                </Typography>
                            </Button>
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/Boards")}>
                                <Typography variant="h6" color="white" component="div">
                                    Boards
                                </Typography>
                            </Button>
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/SIP")}>
                                <Typography variant="h6" color="white" component="div">
                                    SIP
                                </Typography>
                            </Button>
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/About")}>
                                <Typography variant="h6" color="white" component="div">
                                    About
                                </Typography>
                            </Button>
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/About")}>
                                <Typography variant="h6" color="white" component="div">
                                    Contact
                                </Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>}


            <Routes>
                <Route path="/Projects" element={<Home />} />
                <Route path="/Boards" element={<Boards />} />
                <Route path="/SIP" element={<SIP />} />
                <Route path="/About" element={<About />} />

                <Route path="/Projects/SpaceMerchant" element={<SpaceMerchantPage />} />
                <Route path="/Projects/PowerHouse" element={<></>} />
                <Route path="/Projects/SubTerraneanPhysicsComplex" element={<></>} />
                <Route path="/Projects/Blundgeon" element={<></>} />
                <Route path="/Projects/CeValuate" element={<></>} />
                <Route path="/Projects/UnrealEngineCollisionTool" element={<></>} />
                <Route path="/Projects/TankGame" element={<></>} />

            </Routes>
        </ThemeProvider >
    )
};

export default App;
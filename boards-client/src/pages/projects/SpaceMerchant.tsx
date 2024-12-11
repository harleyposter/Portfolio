import React from 'react';
import logo from './logo.svg';
import '../../App.css';
import { Container } from '@mui/material';
import SMLogo from '../../assets/SpaceMerchantThumbnail2.png';

function SpaceMerchantPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ backgroundColor: "#ffffff50", padding: 5 }}>
                    <img src={SMLogo} />
                </Container>
            </header>
        </div>
    );
}

export default SpaceMerchantPage;
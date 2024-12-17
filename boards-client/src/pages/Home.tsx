import React from 'react';
import logo from './logo.svg';
import '../App.css';
import { Project, SpaceMerchant, PowerHouse, STPC, Blundgeon, CeValuate, GroundWard, UE2DCollisionTool, GemScape } from '../components/Project';
import { Stack } from '@mui/material';



function Home() {
  return (
    <div className="App" >
      <header className="App-header">
        <Stack >
          {SpaceMerchant()}
          {PowerHouse()}
          {STPC()}
          {Blundgeon()}
          {CeValuate()}
          {GroundWard()}
          {UE2DCollisionTool()}
          {GemScape()}
        </Stack>
      </header>
    </div>
  );
}

export default Home;

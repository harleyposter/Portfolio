import React, { useState } from 'react';
import logo from './logo.svg';
import '../App.css';
import { Blundgeon, CeValuate, GroundWard, PowerHouse, Project, SpaceMerchant, STPC, UE2DCollisionTool } from '../components/Project';
import { Objective } from '../components/Objective';
import { Button, Stack, Typography } from '@mui/material';

function Boards() {
  const [selection, setSelection] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Stack direction={"row"}>
          <Button style={{ margin: 10, padding: 1 }} variant={"contained"} onClick={() => setSelection(0)}>
            <Typography variant="h6" color="white" component="div">
              Show All
            </Typography>
          </Button>
          <Button style={{ margin: 10, padding: 1 }} variant={"contained"} onClick={() => setSelection(1)}>
            <Typography variant="h6" color="white" component="div">
              Objective 1
            </Typography>
          </Button>
          <Button style={{ margin: 10, padding: 1 }} variant={"contained"} onClick={() => setSelection(2)}>
            <Typography variant="h6" color="white" component="div">
              Objective 2
            </Typography>
          </Button>
          <Button style={{ margin: 10, padding: 1 }} variant={"contained"} onClick={() => setSelection(3)}>
            <Typography variant="h6" color="white" component="div">
              Objective 3
            </Typography>
          </Button>
          <Button style={{ margin: 10, padding: 1 }} variant={"contained"} onClick={() => setSelection(4)}>
            <Typography variant="h6" color="white" component="div">
              Objective 4
            </Typography>
          </Button>
          <Button style={{ margin: 10, padding: 1 }} variant={"contained"} onClick={() => setSelection(5)}>
            <Typography variant="h6" color="white" component="div">
              Objective 5
            </Typography>
          </Button>
          <Button style={{ margin: 10, padding: 1 }} variant={"contained"} onClick={() => setSelection(6)}>
            <Typography variant="h6" color="white" component="div">
              Objective 6
            </Typography>
          </Button>
        </Stack>
        {(selection === 0 || selection === 1) && <Objective projects={[SpaceMerchant(), PowerHouse(), STPC()]} title={'Objective 1'} desc={'Implement multiple completed games, including 3D games, using common tools, languages and software for web, console, PC or mobile platforms'} status={'In Progress'}></Objective>}
        {(selection === 0 || selection === 2) && <Objective projects={[UE2DCollisionTool(), PowerHouse()]} title={'Objective 2'} desc={'Design, develop and implement the architecture and infrastructure needed to support a complete game project.'} status={'In Progress'}></Objective>}
        {(selection === 0 || selection === 3) && <Objective projects={[SpaceMerchant(), Blundgeon()]} title={'Objective 3'} desc={'Implement and analyze fundamental data structures and algorithms associated with game applications supporting gameplay mechanics.'} status={'In Progress'}></Objective>}
        {(selection === 0 || selection === 4) && <Objective projects={[UE2DCollisionTool(), STPC(), CeValuate()]} title={'Objective 4'} desc={'Use software development processes to analyze a project problem and to design, build and test a corresponding software solution.'} status={'In Progress'}></Objective>}
        {(selection === 0 || selection === 5) && <Objective projects={[GroundWard(), CeValuate()]} title={'Objective 5'} desc={'Demonstrate development skills using multiple programming languages, development environments and platforms, including advanced and/or experimental topics in game programming.'} status={'In Progress'}></Objective>}
        {(selection === 0 || selection === 6) && <Objective projects={[PowerHouse(), CeValuate()]} title={'Objective 6'} desc={'Establish collaboration, mentorship and professional leadership skills by working with other disciplines to deliver highly polished and completed projects.'} status={'In Progress'}></Objective>}
      </header>
    </div >
  );
}



export default Boards;

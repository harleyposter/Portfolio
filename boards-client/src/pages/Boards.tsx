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
        {(selection === 0 || selection === 1) && <Objective
          projects={[SpaceMerchant(), PowerHouse(), STPC()]}
          objectiveText={["Space Merchant is an Unreal Engine 2D mobile game published on Google Play in 2021.",
            "Powerhouse is an Unreal Engine 2D PC game to be released on Steam.",
            "Subterranean Physics Complex is an Unreal Engine 2D PC Game released on Itch.io."]}
          title={'Objective 1'}
          desc={'Implement multiple completed games, including 3D games, using common tools, languages and software for web, console, PC or mobile platforms'}
          status={'In Progress'}></Objective>}

        {(selection === 0 || selection === 2) && <Objective
          projects={[UE2DCollisionTool(), SpaceMerchant(), PowerHouse()]}
          objectiveText={["Unreal Engine 2DTilemap++ is a C++ tool designed to assist 2D Projects in Unreal Engine. It is being used in the project Groundward to support it's 2.5D Mechanics.",
            "Space Merchant is a complete game on the Google Play store. It can be beaten, it has settings, save and load, everything. It had permanant upgrades, skill trees, full menus, a tutorial, dialogue, and music.",
            "Powerhouse is a nearly completed game built from the ground up with all major systems developed. The project only needs a slight amount of polish and narrative refinement."]}
          title={'Objective 2'}
          desc={'Design, develop and implement the architecture and infrastructure needed to support a complete game project.'}
          status={'In Progress'}></Objective>}

        {(selection === 0 || selection === 3) && <Objective
          projects={[SpaceMerchant(), Blundgeon()]}
          objectiveText={["Space Merchant implements complex algorithms for Difficulty Progression, Enemy AI, Item Pricing, Fluctuating Sell Prices, and Stat Upgrades.",
            "Blundgeon hosts hundreds of unique weapons that populate their data from the Weapon Class Data Structure. Blundgeon also uses an algorithm for character stat level ups."]}
          title={'Objective 3'}
          desc={'Implement and analyze fundamental data structures and algorithms associated with game applications supporting gameplay mechanics.'}
          status={'In Progress'}></Objective>}

        {(selection === 0 || selection === 4) && <Objective
          projects={[UE2DCollisionTool(), STPC(), CeValuate()]}
          objectiveText={["Unreal Engine 2DTilemap++ was made to solve the lack of recent Paper2D support from UE5 developers. The current tilemap tool is very primitive and inefficent. So 2DTilemap++ is made to allow another way to quickly develop 2D Levels.",
            "Subterreanean Physics Complex was made for a psychological study finding a relation for demographics and the ability to learn and play games. The statistics the game stored allowed for easy data collection to be compared between players.",
            "CeValuate is a Web Application/Client made to increase the efficiency of handling insurance claims. The application utilizes an API to read and write to the database, along with a price API to quickly calculate the value of lost items. This is then returned as a formatted PDF document."]}
          title={'Objective 4'}
          desc={'Use software development processes to analyze a project problem and to design, build and test a corresponding software solution.'}
          status={'In Progress'}></Objective>}

        {(selection === 0 || selection === 5) && <Objective
          projects={[GroundWard(), CeValuate()]}
          objectiveText={["Groundward is a Unreal Engine C++ project that tasked us with creating non euclidean collision and platforming. This project makes use of Paper2D++ to generate a collision plane under the player, which allows for real movement in 2D in a 3D environment.",
            "CeValuate uses React Typescript for a front end client, and C# .NET Entity Framework to process SQL queries. Alongside depreciation calculation functions and a pricing API, CeValuate stands to cut out the time consuming work and save a significant amount of resources."]}
          title={'Objective 5'}
          desc={'Demonstrate development skills using multiple programming languages, development environments and platforms, including advanced and/or experimental topics in game programming.'}
          status={'In Progress'}></Objective>}

        {(selection === 0 || selection === 6) && <Objective
          projects={[PowerHouse(), CeValuate()]}
          objectiveText={["Powerhouse is a nearly complete project, with assistance from a peer in Game Art and Animation / Music Theory.",
            "CeValuate is created in an internship with UHaul Repwest Insurance to cut out the need for outsourcing item valuation. The project is monitored by a project manager, as well as a supervisor."]}
          title={'Objective 6'}
          desc={'Establish collaboration, mentorship and professional leadership skills by working with other disciplines to deliver highly polished and completed projects.'}
          status={'In Progress'}></Objective>}
      </header>
    </div >
  );
}



export default Boards;

import React from "react"
import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { theme } from "./Theming";

import SMLogo from '../assets/SpaceMerchantThumbnail2.png';
import PHLogo from '../assets/PowerHouseLogo2.png';
import STPCLogo from '../assets/STPCLogo2.png';
import BGLogo from '../assets/BlundgeonLogo2.png';
import GWLogo from '../assets/GroundwardLogo3.png';
import CVLogo from '../assets/CeValuateLogo.png'
import UE2DCTLogo from '../assets/UE52DCollisionToolLogo.png'

export interface ProjectProps {
  link: string,
  image: string,
  title: string,
  desc: string,
  date: string,
  type: string,
  status: string,
}


// Projects 

export const SpaceMerchant = () => {
  return (
    < Project title={"Space Merchant"}
      desc={"Space Merchant is a resource management shoot-em-up game, with a death based progression system that rewards endurance. The player has to maneuver about and destroy an oncoming barrage of asteroids, ships, and bosses to harvest materials to upgrade their ship. Get stronger, strategize spending, and manage risks to make it farther into each run."}
      type={"Mobile Single Player Game"}
      link={"/Projects/SpaceMerchant"}
      date={"April 5, 2021"}
      status={"Released"}
      image={SMLogo} />)
}

export const PowerHouse = () => {
  return (
    <Project title={"Powerhouse"}
      desc={"Powerhouse is a retro 2D Metroidvania Platformer where players fight through and explore their father's manor, finding equipment along the way. Master simple jump and shoot gameplay with complex movement and combat abilities to fight bosses between 3 different areas to release the lockdown and save your father."}
      type={"PC Single Player Game"}
      link={"/Projects/PowerHouse"}
      date={"May 18, 2024"}
      status={"Active, In Development"}
      image={PHLogo} />)
}

export const STPC = () => {
  return (
    <Project title={"SubTerranean Physics Complex"}
      desc={"SubTerranean Physics Complex is a 2D Puzzle Precision Platformer where players must use a magnet on a rope as a grappling hook to explore an abandoned laboratory for lost technology. Plan out your movements through each obstacle, and precisely execute to beat each room. Traverse through 4 levels with unique obstacles, collectibles, and secrets."}
      type={"Pc Single Player Game"}
      link={"/Projects/SubTerraneanPhysicsComplex"}
      date={"October 27, 2020"}
      status={"Paused, Polishing"}
      image={STPCLogo} />)
}

export const Blundgeon = () => {
  return (
    <Project title={"Blundgeon"}
      desc={"Blundgeon is a PvP Free for All Arena Shooter with RPG elements in a procedurally generated map. The game combines DOOM movement, gunplay, and multiplayer fights with RPG stats, items, abilities, and PvE encounters for engaging matches. The game encourages a mix of battle strategy, map exploration, gathering equipment, scaling stats, and pure FPS skill to outplay your opponents."}
      type={"Pc Multiplayer Game"}
      link={"/Projects/Blundgeon"}
      date={"June 12, 2021"}
      status={"Paused, In Development"}
      image={BGLogo} />)
}

export const CeValuate = () => {
  return (
    <Project title={"CeValuate"}
      desc={"CeValuate is a web application being developed for UHaul Repwest Insurance to handle and displays data regarding insurance claims. Reads from a database for employee use in calculating item valuation in claims. Utilizes Market Price APIs to find and calculate an items valuation using inputted information from claimants."}
      type={"Web Application"}
      link={"/Projects/CeValuate"}
      date={"November 16, 2024"}
      status={"Active, In Development"}
      image={CVLogo} />)
}

export const GroundWard = () => {
  return (
    <Project title={"Groundward"}
      desc={"Groundward is a 2.5D Puzzle Adventure Platformer inspired by the indie game FEZ (2012). Explore a mystical and mysterious cavern in a 2D perspective, and change the perspective to traverse otherwise impossible environments. Learn the secrets of an unknown society and discover their past. Learn and use the power of music to restore the mines. Find a way out."}
      type={"PC Single Player Game"}
      link={"/Projects/Groundward"}
      date={"February 28, 2021"}
      status={"Paused, In Development"}
      image={GWLogo} />)
}

export const UE2DCollisionTool = () => {
  return (
    <Project title={"Unreal Engine 2D Collision Tool"}
      desc={"The UE5 2D Collision Tool adds functionality for both creating and editing 2D Collision using Tile Maps. Upload a map texture, and tiles will be created based on a created rerference table. Also can dynamically create collision based on a camera view, allowing for 2D"}
      type={"Unreal Engine 5 Addon"}
      link={"/Projects/UE2DTool"}
      date={"November 20, 2024"}
      status={"Active, In Development"}
      image={UE2DCTLogo} />)
}


export function Project(props: ProjectProps) {
  const navigate = useNavigate();


  return (
    <>
      <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
        <Stack>
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60" }}>
            <Stack style={{ margin: 10 }} direction={"row"}>
              <Container style={{ flex: 3, textAlign: "left", flexDirection: "row", fontVariantCaps: "all-petite-caps", justifyContent: "flex-start" }}>
                {props.title}
              </Container>
              <Divider />
              <Container style={{ flex: 2, flexDirection: "row", textAlign: "right", fontVariantCaps: "all-petite-caps", fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                {'\t' + props.type}
              </Container>
            </Stack>
          </ Container>

          <Divider />
          <Container >
            <Stack style={{ margin: 10 }} direction={"row"}>
              <Container style={{ height: 200, flex: 1, flexDirection: "row", backgroundColor: "#ffffff50", padding: 5 }}>
                <img height={"100%"} src={props.image} />
              </Container>
              <Container style={{ flex: 10, flexDirection: "row", textAlign: "left", fontSize: theme.typography.h5.fontSize, padding: 10 }}>
                {props.desc}
              </Container>
            </Stack>
          </ Container>
          <Divider />
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60" }}>
            <Stack style={{ margin: 5 }} direction={"row"}>
              <Container style={{ flex: 4, padding: 10 }}>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, textAlign: "left", fontFamily: theme.typography.fontFamily, fontSize: theme.typography.body1.fontSize }}>
                  {"Last Updated: " + props.date}
                </Container>
              </Container>
              <div style={{ flex: 4, padding: 10 }}>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, textAlign: "left", fontFamily: theme.typography.fontFamily, fontSize: theme.typography.body1.fontSize }}>
                  {"Status: " + props.status}
                </Container>
              </div>
              <Button style={{ flex: 1, margin: 10, padding: 1 }} variant={"contained"} onClick={() => navigate("/Projects")}>
                <Typography variant="h6" color="white" component="div">
                  View
                </Typography>
              </Button>

            </Stack>
          </ Container>
        </Stack>
      </Container >
    </>
  );
}
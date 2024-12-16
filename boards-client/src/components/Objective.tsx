import React from "react"
import { Button, Container, Divider, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { theme } from "./Theming";
import { Project, ProjectProps } from "./Project";

interface ObjectiveProps {
  projects: JSX.Element[],
  objectiveText: string[],
  title: string,
  desc: string,
  status: string,
}

export function Objective(props: ObjectiveProps) {
  const navigate = useNavigate();


  const projects = props.projects.map((proj, index) => {
    return (<>
      {proj}
      <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, marginTop: -5, marginLeft: 5, marginBottom: 20, fontSize: theme.typography.h5.fontSize }}>
        <Container style={{ textAlign: "left", fontVariantCaps: "all-petite-caps" }}>
          Objective Info: {props.objectiveText[index]}
        </Container>
      </ Container >
    </>)
  });

  return (
    <>
      <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 20, padding: 5, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
        <Stack>
          <Stack style={{ margin: 10 }} direction={"row"}>
            <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 5, fontSize: theme.typography.h3.fontSize }}>
              <Container style={{ textAlign: "left", fontVariantCaps: "all-petite-caps" }}>
                {props.title}
              </Container>
            </ Container>
          </Stack>
          <Stack style={{ margin: 10 }} direction={"row"}>
            <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 5, fontSize: theme.typography.h5.fontSize }}>
              <Container style={{ textAlign: "left", flexDirection: "row", fontVariantCaps: "all-petite-caps", justifyContent: "flex-start" }}>
                {props.desc}
              </Container>

            </Container>
          </Stack>
          <Stack style={{ margin: 10 }}>
            {projects}
          </Stack>
        </Stack >
      </Container >
    </>
  );
}
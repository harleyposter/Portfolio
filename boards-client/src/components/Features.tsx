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

export interface FeaturesProps {
  features: string[]
}


export function Features(props: FeaturesProps) {
  const navigate = useNavigate();

  const CreateFeaturesList = props.features.map(feature => {
    return (
      <Container style={{ margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h5.fontSize }}>
        - {feature}
      </Container>
    )
  });


  return (
    <>
      <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
        <Stack>
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
            FEATURES
          </Container>
          <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize, textAlign: "left" }}>
            {CreateFeaturesList}
          </Container>
        </Stack >
      </ Container >
    </>
  )
};

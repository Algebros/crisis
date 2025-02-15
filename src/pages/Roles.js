import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Roles() {
  const [factions, setFactions] = useState({});

  useEffect(() => {
    const factionRoles = data.roles.reduce((acc, role) => {
      const { faction } = role;
      if (!acc[faction]) {
        acc[faction] = [];
      }
      acc[faction].push(role);
      return acc;
    }, {});
    setFactions(factionRoles);
  }, []);

  return (
    <Container>
      {/* <Typography variant="h1" gutterBottom>
        Roles Page
      </Typography> */}
      {Object.keys(factions).map(faction => (
        <div key={faction}>
          <Typography variant="h3" gutterBottom style={{ margin: '20px 0' }}>
            {faction}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {data.factions[faction]}
          </Typography>
          {factions[faction].map(role => (
            <Accordion key={role.name}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{role.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography component="span" variant="body2" color="textPrimary">
                    <span style={{ fontWeight: 'bold' }}>Description:</span> {role.description}
                  </Typography>
                  <Typography component="span" variant="body2" color="textPrimary">
                    <span style={{ fontWeight: 'bold' }}>Feature:</span> {role.feature}
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ))}
    </Container>
  );
}

export default Roles;
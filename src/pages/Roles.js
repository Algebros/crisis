import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

function Roles() {
  const [factions, setFactions] = useState({});
  const { t, i18n } = useTranslation();

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
  }, [i18n.language]); // Re-run effect when language changes

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
          {t(`factions.${faction}`)}
          </Typography>
          {factions[faction].map((role, idx) => (
            <Accordion key={role.name}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{role.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography component="span" variant="body2" color="textPrimary">
                    <span style={{ fontWeight: 'bold' }}>Description:</span> {t(`roles.${idx}.description`)}
                  </Typography>
                  <Typography component="span" variant="body2" color="textPrimary">
                    <span style={{ fontWeight: 'bold' }}>Feature:</span> {t(`roles.${idx}.feature`)}
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
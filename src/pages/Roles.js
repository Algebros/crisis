import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import data2 from '../assets/data_ru.json';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid2 } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function Roles() {
  const [factions, setFactions] = useState({});
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const characters = i18n.language === "en" ? data : data2;
    const factionRoles = characters.roles.reduce((acc, role) => {
      const { faction } = role;
      if (!acc[faction]) {
        acc[faction] = [];
      }
      acc[faction].push(role);
      return acc;
    }, {});
    setFactions(factionRoles);
  }, [i18n.language]);

  return (
    <Container>
      {Object.keys(factions).map(faction => (
        <div key={faction}>
          <Typography variant="h3" gutterBottom style={{ margin: '20px 0' }}>
            {faction}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t(`factions.${faction}`)}
          </Typography>

          <Grid2 container direction="row" spacing={2}>
            {factions[faction].map((role) => (
              <Grid2>
                <Card variant="outlined">
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                </Card>
              </Grid2>

              // <Accordion key={role.name}>
              //   <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              //     <Typography variant="h6">{role.name}</Typography>
              //   </AccordionSummary>
              //   <AccordionDetails>
              //     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              //       <Typography component="span" variant="body2" color="textPrimary">
              //         <span style={{ fontWeight: 'bold' }}>Description:</span> {role.description}
              //       </Typography>
              //       <Typography component="span" variant="body2" color="textPrimary">
              //         <span style={{ fontWeight: 'bold' }}>Feature:</span> {role.feature}
              //       </Typography>
              //     </div>
              //   </AccordionDetails>
              // </Accordion>
            ))}
          </Grid2>
        </div>
      ))}
    </Container>
  );
}

export default Roles;
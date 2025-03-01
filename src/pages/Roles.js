import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import data2 from '../assets/data_ru.json';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid2 } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const images = require.context('../assets/images/roles', false, /\.(png|jpe?g|svg|webp)$/);

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

  const getImage = (imageName) => {
    try {
      return images(`./${imageName}`);
    } catch (error) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

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
              <Grid2 size={2} key={role.name}>
                <Card variant="outlined">
                  <CardMedia
                    image={getImage(role.image)}
                    title={role.name}
                    component="img"
                  />
                </Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {role.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {role.description}
                  </Typography>
                </CardContent>
              </Grid2>
            ))}
          </Grid2>
        </div>
      ))}
    </Container>
  );
}

export default Roles;
import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

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
      <Typography variant="h1" gutterBottom>
        Roles Page
      </Typography>
      {Object.keys(factions).map(faction => (
        <div key={faction}>
          <Typography variant="h2" gutterBottom>
            {faction}
          </Typography>
          <List>
            {factions[faction].map(role => (
              <ListItem key={role.name}>
                <ListItemText
                  primary={role.name}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        Description: {role.description}
                      </Typography>
                      <br />
                      <Typography component="span" variant="body2" color="textPrimary">
                        Skill: {role.skill}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </Container>
  );
}

export default Roles;
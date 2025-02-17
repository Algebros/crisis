import React, { useEffect } from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CharacterList.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';

function CharacterList({ characters, getImage }) {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        {t('UI.TotalCharacters')}: {characters.length}
      </Typography>
      <List className="character-list">
        {characters.map((character, index) => (
          <Card key={index} className="character-card">
            <CardMedia
              component="img"
              height="140"
              image={getImage(character.imageUrl)}
              alt={character.character}
            />
            <CardContent>
              <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                {character.character}
              </Typography>
              {character.classes.map((cls, idx) => (
                <Typography key={idx} variant="body2" display="block">
                  {cls}
                </Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </List>
    </>
  );
}

export default CharacterList;
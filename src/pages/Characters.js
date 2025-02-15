import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import data2 from '../assets/data_ru.json';
import CharacterList from '../components/CharacterList';
import CharacterFilter from '../components/CharacterFilter';
import { useTranslation } from 'react-i18next';

const images = require.context('../assets/images', false, /\.(png|jpe?g|svg|webp)$/);

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setCharacters(i18n.language === "en" ? data.characters : data2.characters);
  }, [i18n.language]);

  const handleClassChange = (event) => {
    const { value, checked } = event.target;
    setSelectedClasses((prevSelectedClasses) =>
      checked ? [...prevSelectedClasses, value] : prevSelectedClasses.filter((cls) => cls !== value)
    );
  };

  const getImage = (imageName) => {
    try {
      return images(`./${imageName}`);
    } catch (error) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  const filteredCharacters = characters.filter((character) =>
    selectedClasses.length === 0 || selectedClasses.every((cls) => !character.classes.includes(cls))
  );

  const uniqueClasses = [...new Set(characters.flatMap((character, idx) => character.classes))];

  return (
    <div>
      <CharacterFilter
        uniqueClasses={uniqueClasses}
        selectedClasses={selectedClasses}
        handleClassChange={handleClassChange}
      />
      <CharacterList characters={filteredCharacters} getImage={getImage} />
    </div>
  );
}

export default Characters;
import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import CharacterList from '../components/CharacterList';
import CharacterFilter from '../components/CharacterFilter';

const images = require.context('../assets/images', false, /\.(png|jpe?g|svg|webp)$/);

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    setCharacters(data.characters);
  }, []);

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

  const uniqueClasses = [...new Set(characters.flatMap((character) => character.classes))];

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
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import './CharacterFilter.css'; // Import the CSS file

function CharacterFilter({ uniqueClasses, selectedClasses, handleClassChange }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className="character-filter-container">
                <Button variant="contained" onClick={toggleExpanded} className="toggle-button">
                    {expanded ? 'Hide Filters' : 'Show Filters'}
                </Button>
            </div>
            <div className="character-filter">
                {expanded && (
                    <FormGroup row>
                        {uniqueClasses.map((cls) => (
                            <FormControlLabel
                                key={cls}
                                control={
                                    <Checkbox
                                        value={cls}
                                        checked={selectedClasses.includes(cls)}
                                        onChange={handleClassChange}
                                    />
                                }
                                label={`Is not ${cls}`}
                            />
                        ))}
                    </FormGroup>
                )}
            </div>
        </div>
    );
}

export default CharacterFilter;
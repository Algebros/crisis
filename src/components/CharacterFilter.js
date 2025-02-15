import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import './CharacterFilter.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';

function CharacterFilter({ uniqueClasses, selectedClasses, handleClassChange }) {
    const [expanded, setExpanded] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {}, [i18n.language]);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className="character-filter-container">
                <Button variant="contained" onClick={toggleExpanded} className="toggle-button">
                    {expanded ? t("UI.Hide Filter") : t("UI.Show Filter")}
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
                                label={`${t("UI.Isnt")} ${cls}`}
                            />
                        ))}
                    </FormGroup>
                )}
            </div>
        </div>
    );
}

export default CharacterFilter;
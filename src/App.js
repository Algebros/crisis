import React, { useState } from 'react';
import { HashRouter, BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Roles from './pages/Roles';
import InteractiveMap from './pages/InteractiveMap';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

const theme = createTheme({
  spacing: 8,
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
}));

function App() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const menuItems = [
    { text: t('UI.Forensic Clues'), path: '/characters' },
    { text: t('UI.Roles'), path: '/roles' },
    { text: t('UI.Map'), path: '/map' },
  ];

  const drawerList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.path} className={classes.link}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <ListItem button onClick={toggleLanguage} className={classes.link} style={{ backgroundColor: '#e57373', fontWeight: 'bold' }}>
          <ListItemText style={{ textAlign: "center" }} primary={language === 'en' ? 'EN' : 'RU'} />
        </ListItem>
      </div>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <div className={classes.root}>
          {isMobile ? (
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  {t('UI.Party Animals "Crisis" mode')}
                </Typography>
                <IconButton
                  edge="end"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                  {drawerList()}
                </Drawer>
              </Toolbar>
            </AppBar>
          ) : (
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  {t('UI.Party Animals "Crisis" mode')}
                </Typography>
                {menuItems.map((item, index) => (
                  <Button key={index} color="inherit" component={Link} to={item.path} className={classes.link}>
                    {item.text}
                  </Button>
                ))}
                <Button color="inherit" onClick={toggleLanguage}>
                  {language === 'en' ? 'EN' : 'RU'}
                </Button>
              </Toolbar>
            </AppBar>
          )}
          <Routes>
            <Route path="/" element={<Navigate to="/characters" />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/map" element={<InteractiveMap />} />
          </Routes>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
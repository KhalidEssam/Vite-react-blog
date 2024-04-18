import React from 'react';
import { createTheme } from '@mui/material'; // Import ThemeProvider and createTheme
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles ,ThemeProvider} from '@mui/styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const theme = createTheme(); // Define your theme object

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    // marginRight: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
    <ThemeProvider theme={theme}> {/* Wrap your component tree with ThemeProvider */}

    <Router>
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Blog
          </Typography>
          <Button color="inherit">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} >Home</Link>
          </Button>
          <Button color="inherit">
            {/* About */}
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }} >About</Link>
            {/* <Link to=""/> */}
          </Button>
          <Button color="inherit">
            <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }} >Blog</Link>

          </Button>
        </Toolbar>
      </AppBar>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </Router>

    </ThemeProvider>



    </>
  );
};

export default App;

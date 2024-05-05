import React from 'react';
import { createTheme } from '@mui/material'; // Import ThemeProvider and createTheme
import { ThemeProvider} from '@mui/styles';
import Navbar from './components/Navbar'
const theme = createTheme(); // Define your theme object




const App = () => {
  console.log(import.meta.env)
  return (
    <>
    <ThemeProvider theme={theme}> 

    <Navbar />

    </ThemeProvider>



    </>
  );
};

export default App;

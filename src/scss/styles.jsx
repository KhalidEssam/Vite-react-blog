import { makeStyles ,ThemeProvider} from '@mui/styles';

import { createTheme } from '@mui/material'; // Import ThemeProvider and createTheme


const theme = createTheme(); // Define your theme object

export const  UseStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        // marginRight: theme.spacing(2),
    },
    rightButtons: {
        marginLeft: '5%',
    },
    leftButtons: {
        marginright: '50%',
    }
}));
export default  UseStyles
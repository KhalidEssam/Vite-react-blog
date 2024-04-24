import React, { useState, useEffect }from 'react';
import { createTheme } from '@mui/material'; // Import ThemeProvider and createTheme
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles ,ThemeProvider} from '@mui/styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import UseStyles from '../scss/styles'



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


const LogoutButton = () => {
const { logout } = useAuth0();

return (


    <Button color="inherit" style={{float: 'right'}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} >  Log Out </Link>
    </Button>

);
};

const Navbar = () => {
    const [accessToken, setAccessToken] = useState(null);

    const LoginButton = () => {

        const { loginWithRedirect,  getAccessTokenSilently } = useAuth0();


        useEffect(() => {
            const fetchAccessToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                setAccessToken(token);
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
            };

            fetchAccessToken();
        }, [getAccessTokenSilently]);


        return <> <Button color="inherit" onClick={() => loginWithRedirect()} > 
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} >  Log in </Link>
        </Button></>
    };


    const classes = UseStyles() 
    return (
        <Router>

        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                My Blog
            </Typography>
            
            <div className={classes.leftButtons}>
                <Button color="inherit">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} >Home</Link>
                </Button>
                <Button color="inherit">
                <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }} >About</Link>
                </Button>
                <Button color="inherit">
                <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }} >Blog</Link>

                </Button>
            </div>
            <div className={classes.rightButtons}>

                {accessToken ? <LogoutButton /> : <LoginButton />}
                
            </div>
            
        </Toolbar>
        </AppBar>


        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        </Routes>
        </Router>
    );
}

export default Navbar

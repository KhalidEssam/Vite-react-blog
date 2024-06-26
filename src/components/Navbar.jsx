import React, { useState, useEffect }from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import UseStyles from '../scss/styles'
import { useDispatch , useSelector } from 'react-redux';
import { fetchUserSuccess } from '../reduxstore/actions/userActions';



// icons

import { IoHome } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { TbBookmarkQuestion } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

// pages
import HomePage from '../pages/Home';
import Blog from '../pages/Blog';
import About from '../pages/About';


const LogoutButton = () => {
const { logout } = useAuth0();

return (


    <Button color="inherit" style={{float: 'right'}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} > <CiLogout /> Log Out </Link>
    </Button>

);
};



const Navbar = () => {
    const [accessToken, setAccessToken] = useState(null);
    const  user  = useAuth0();
    const dispatch = useDispatch();
    const UserStore = useSelector(state => state.user);


    const LoginButton = () => {

    const { loginWithRedirect,  getAccessTokenSilently } = useAuth0();

        useEffect(() => {
            const fetchAccessToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                dispatch(fetchUserSuccess({ name: user.user.name, email: user.user.email }));
                setAccessToken(token);
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
            };
            if (user && user.isAuthenticated)
                fetchAccessToken();
        }, [getAccessTokenSilently]);


        return <> <Button color="inherit" onClick={() => loginWithRedirect()} > 
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} > <IoIosLogOut /> Log in </Link>
        </Button></>
    };



    const classes = UseStyles() 


    return (
        <Router>

        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                {/* My Blog  */}
                {user.isAuthenticated  && "Hello Mr" + " " +UserStore.user?.email }

            </Typography>
            
            <div className={classes.leftButtons}>
                <Button color="inherit">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} > <IoHome /> Home </Link>
                </Button>
                <Button color="inherit">

                <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }} >
                <TbBookmarkQuestion /> About</Link>
                </Button>
                <Button color="inherit">
                <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }} > <FaBoxArchive /> Blog</Link>

                </Button>
            </div>
            <div className={classes.rightButtons}>

                {accessToken ? <LogoutButton /> : <LoginButton />}
                
            </div>
            
        </Toolbar>

        {/* <DecodeToken accessToken={accessToken}/> */}
        </AppBar>


        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        </Routes>
        </Router>
    );
}

export default Navbar

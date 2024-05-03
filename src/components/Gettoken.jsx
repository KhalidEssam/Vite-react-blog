import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AuthCallbackPage = () => {
    const location = useLocation();

    useEffect(() => {
        // Function to extract token from URL
        const extractTokenFromURL = () => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('code'); // Assuming 'token' is the parameter name
        if (token) {
            // Store token in state/local storage/session storage
            localStorage.setItem('authToken', token);
            // Redirect to desired page
            // history.push('/desired-page');
        }
        };

        extractTokenFromURL();
    }, [location]);

    return (
        <div>
        <p>Processing authentication...</p>
        </div>
    );
};

export default AuthCallbackPage;

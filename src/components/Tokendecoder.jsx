// import React from 'react';
// // import * as jwt_decode from 'jsonwebtoken';
// import { jwtDecode } from 'jwt-decode' // import dependency


// const DecodeToken = ({ accessToken }) => {
//     const decodeToken = () => {
//         try {
//             console.log('Access Token:', accessToken);
//             const decodedToken = jwtDecode(JSON.stringify(accessToken));
//             console.log('Decoded Access Token:', decodedToken);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             {decodeToken()}
//             <p>Hello world</p>
//         </div>
//     );
// };

// export default DecodeToken;



import React from 'react';
import {jwtDecode} from 'jwt-decode'; // Import jwt_decode function from jwt-decode package

const DecodeToken = ({ accessToken }) => {
    const decodeToken = async () => {
        try {
            // Await the decoding process
            const decodedToken = await jwtDecode(accessToken);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={decodeToken}>Decode Access Token</button>
            <p>Hello world</p>
        </div>
    );
};

export default DecodeToken;

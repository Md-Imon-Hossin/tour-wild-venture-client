// import React from 'react';
// import { useLocation, Navigate } from "react-router-dom";
// import { Spinner } from 'react-bootstrap';
// import useAuth from '../../hooks/useAuth';


// const PrivateRoute = ({ children, ...rest }) => {
//     const { user, isLoading } = useAuth();
//     let location = useLocation();

//     if (isLoading) {
//         return <div className='text-center my-3'>
//             <Spinner animation="border" variant="dark" />
//         </div>
//     }
//     if (user?.email) {
//         return children;
//     }

//     return <Navigate to="/login" state={{ from: location }} />

// };

// export default PrivateRoute;
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className='text-center'>
            <Spinner animation="border" variant="dark" className='mb-3' />
        </div>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />

}

export default PrivateRoute;
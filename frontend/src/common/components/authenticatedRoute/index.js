import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const AuthenticatedRoute = (props) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return (
        <>{isAuthenticated ? <Route {...props} /> : <Navigate to="/login" />}</>
    );
};

export default AuthenticatedRoute;

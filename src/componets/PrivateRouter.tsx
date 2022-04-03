import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../utils/localStorage';

type Props = {
    children: JSX.Element
}

const PrivateRouter = (props: Props) => {
    const { user } = isAuthenticate();
    if(!user?.role){
        return <Navigate to="/signin" />
    }
    return props.children
}

export default PrivateRouter
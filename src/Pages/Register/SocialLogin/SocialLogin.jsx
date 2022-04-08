import React from 'react';
import useAuth from '../../../Hooks/useAuth'

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth()
    return (
        <div className='text-center my-2'>
            <p className='m-0 p-0'>Continue With</p>
            <button className='btn-main' onClick={signInWithGoogle}>Google</button>
        </div>
    );
};

export default SocialLogin;
import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/slices/dataSlice';

export default function Login() {

    const page = useSelector((state) => state.data.page);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    // useEffect(() => {
    //     localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
    // }, [loginStatus])

    // useEffect(() => {
    //     const storage = JSON.parse(localStorage.getItem('loginStatus'))
    //     setLoginStatus(storage);
    // }, [loginStatus])

    const handleSubmit = async () => {
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: username,
                password: password,
                expiresInMins: 30,
            }),
            credentials: 'include' // Include cookies (e.g., accessToken) in the request
        });
        const data = await res.json();

        if (username === '' || password === '') {
            alert("Please enter required details");
        }
        else if (data.message) {
            alert("Invalid Credentials")
        }
        if (data.accessToken) {
            localStorage.setItem('page', JSON.stringify('productList'));
            dispatch(setPage('productList'));
        }
    }
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <Box className='border border-gray-300 py-10 px-5 w-[35vw] flex flex-col gap-4 items-center rounded-2xl'>
                <h1 className='text-3xl font-bold mb-5'>Login</h1>
                <div>
                    <TextField
                        type='text'
                        name='username'
                        label='Username'
                        variant='outlined'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        type='text'
                        name='password'
                        label='Password'
                        variant='outlined'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Button onClick={handleSubmit} variant='contained'>
                    Login
                </Button>
            </Box>
        </div>
    )
}

import React, { useState } from 'react';
import { account, ID } from '../lib/appwrite';
import { FormControl, InputLabel, Input, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup=()=> {
    const navigate = useNavigate(); // Initialize the navigate hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function login(email, password) {
        await account.createEmailSession(email, password);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        
        console.log('Name submitted:', name);
        console.log('userName submitted:', userName);
        console.log('password submitted:', password);
    
        
        await account.create( ID.unique(), email, password, name);
        await login(email, password);
        navigate('/login'); 
    
        
        setName('');
        setUserName('');
        setPassword('');
        setEmail('');
    };
    
    return (
        <Container
            maxWidth="sm"
            style={{
                background: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                margin: '50px auto',
            }}
        >
            <Typography variant="h4" align="center" gutterBottom>
                Welcome!
            </Typography>
            <Typography variant="h5" align="center" paragraph>
                Log In
            </Typography>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input id="name" type="text" value={name} onChange={handleNameChange} />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input id="userName" type="text" value={userName} onChange={handleUserNameChange} />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" type="email" value={email} onChange={handleEmailChange} />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" type="password" value={password} onChange={handlePasswordChange} />
                </FormControl>
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                    Submit
                </Button>
            </form>
        </Container>
    );
}

export default Signup;

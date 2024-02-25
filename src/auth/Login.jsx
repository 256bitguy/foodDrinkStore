import React, { useState } from 'react';
import { account } from '../lib/appwrite';
import { FormControl, InputLabel, Input, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();  // Initialize the navigate hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
             await account.createEmailSession(email, password);
              navigate('/home');   
        } catch (error) {
            console.error('Login failed:', error);
           
        }
    };

    return (
        <Container
            maxWidth="sm"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <Paper elevation={3} style={{ padding: "20px", width: "80%" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Welcome!
                </Typography>
                <Typography variant="h5" align="center" paragraph>
                    Log In
                </Typography>
                <form onSubmit={handleLogin}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </FormControl>
                    <Button
                        type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}
                    >
                        Log In
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default Login;

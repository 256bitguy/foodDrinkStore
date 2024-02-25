import React, { useState, useEffect } from 'react';
import { account } from '../lib/appwrite';
import { Container, Typography, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate(); // Initialize the navigate hook
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data when the component mounts
        async function fetchUserData() {
            try {
                // Use the Appwrite SDK to get the current user's data
                const user = await account.get();
                setUserData(user);
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle the error appropriately (redirect to login, show an error message, etc.)
            }
        }

        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            // Use the Appwrite SDK to logout the current user
            await account.deleteSession('current');
            navigate('/'); // Navigate to the signup page after logout
        } catch (error) {
            console.error('Logout failed:', error);
            // Handle logout failure (show error message, etc.)
        }
    };

    return (
        <Container
            style={{
                background: "#fff",
                width: "80vw",
                margin: "30px",
                height: "80vh",
                position: "relative",
                top: "5%",
                border: "2px solid black"
            }}
        >
            <Container
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    justifyContent: "space-evenly"
                }}
            >
                <Container><Typography style={{ flex: "2", border: "2px solid red" }}>Dashboard</Typography></Container>

                {userData ? (
                    <Container>
                        <Typography variant="h6">Welcome, {userData.name}!</Typography>
                        <Typography variant="body1">Email: {userData.email}</Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleLogout}
                            style={{ marginTop: '20px' }}
                        >
                            Logout
                        </Button>
                    </Container>
                ) : (
                    <Typography variant="body1">Loading user data...</Typography>
                )}

                <Link href="/signup" underline="hover" style={{ marginTop: '20px' }}>
                    Back to Signup
                </Link>
            </Container>
        </Container>
    );
}

export default Dashboard;

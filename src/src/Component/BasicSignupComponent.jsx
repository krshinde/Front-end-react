import { Box, Button, Container, FormControl, FormControlLabel, Link, Switch, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import BgSignUp from '../assets/img/BgSignUp.png';

const BasicSignupComponent = () => {
    const theme = useTheme();
    const titleColor = theme.palette.primary.main;
    const textColor = theme.palette.text.primary;
    const bgColor = theme.palette.background.paper;
    const bgIcons = theme.palette.primary.light;

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    position: 'absolute',
                    minHeight: { xs: '100vh', md: '50vh' },
                    width: { md: 'calc(100vw - 50px)' },
                    borderRadius: { md: '15px' },
                    left: 0,
                    right: 0,
                    zIndex: -1,
                    top: 0,
                    backgroundImage: `url(${BgSignUp})`,
                    backgroundSize: 'cover',
                    mx: { md: 'auto' },
                    mt: { md: '14px' },
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: '3rem',
                    mb: '0px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3" color="white" fontWeight="bold">
                    Join Us!
                </Typography>
                <Typography
                    variant="body1"
                    color="white"
                    fontWeight="normal"
                    mt={2}
                    mb={3}
                >
                    Create a free account to access personalized <br /> fitness plans and health tips.
                </Typography>
            </Box>

            <Box
                sx={{
                    maxWidth: 455,
                    backgroundColor: bgColor,
                    borderRadius: '15px',
                    p: 5,
                    mx: 'auto',
                    boxShadow: '0 20px 27px 0 rgb(0 0 0 / 8%)',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h5" color={"darkcyan"} fontWeight="bold" mb={3}>
                    Register Here
                </Typography>
                <Box component="form">
                    {[
                        { label: "Full Name", type: "text", placeholder: "Your full name" },
                        { label: "Email", type: "email", placeholder: "Your email address" },
                        { label: "Password", type: "password", placeholder: "Your password" },
                    ].map(({ label, type, placeholder }, index) => (
                        <FormControl fullWidth margin="normal" key={index}>
                            {/* <InputLabel shrink>{label}</InputLabel> */}
                            <TextField
                                fullWidth
                                label={label}
                                variant="outlined"
                                placeholder={placeholder}
                                type={type}
                                size="small"
                                InputLabelProps={{ shrink: true }}
                                sx={{ mb: 2, borderRadius: '15px' }}
                            />
                        </FormControl>
                    ))}
                    <FormControlLabel
                        control={<Switch color="primary" />}
                        label="Remember me"
                        sx={{ mb: 2 }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        // color="#4fd1c5"
                        sx={{
                            backgroundColor:"#4fd1c5",
                            mb: 2,
                            height: 45,
                            fontSize: '10px',
                            fontWeight: 'bold',
                            // '&:hover': { backgroundColor: theme.palette.primary.light },
                            // '&:active': { backgroundColor: theme.palette.primary.dark },

                        }}
                    >
                        SIGN UP
                    </Button>
                </Box>
                <Box mt={2}>
                    <Typography color={textColor} fontWeight="medium">
                        Already have an account?
                        <Link href="#" fontWeight="bold" sx={{ ml: 1,color:"#4fd1c5", "&:hover": { color: bgIcons } }}>
                            Sign In
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default BasicSignupComponent
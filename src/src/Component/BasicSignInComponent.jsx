import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
  useTheme,
  Link,
  CssBaseline,
} from '@mui/material';
import { styled } from '@mui/system';
import signInImage from '../assets/img/BgSignUp.png';

const BackgroundBox = styled(Box)({

  display: { xs: "none", md: "block" },
  overflowX: 'hidden',
  height: '50vh',
  width: 'calc(100vw - 50px)',
  borderRadius:  '15px' ,
  position: 'absolute',
  // right: 0,
  // letf :0,
  top:5,
  mx:"auto"

  
});

const BackgroundImage = styled(Box)({
  // position: 'absolute',
  // right:0,
  // left:0,
  backgroundImage: `url(${signInImage})`,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  mx:"auto"
  
  
  // borderBottomLeftRadius: '20px',
});

const BasicSignInComponent = () => {
  const theme = useTheme();
  const titleColor = theme.palette.primary.main;
  const textColor = theme.palette.text.secondary;

  return (
    <Container component="main" maxWidth="lg" sx={{ position: 'relative' }}>
      {/* <CssBaseline /> */}
      <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '75vh' }}>
        <Grid item xs={12} md={6} lg={5}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="transparent"
            p={5}
            mt={{ md: "100px", lg: "80px" }}
            sx={{ 
              boxShadow: '0 20px 27px 0 rgb(0 0 0 / 8%)',
               borderRadius: '15px'
            }}
          >
            <Typography variant="h4" color={titleColor} gutterBottom>
              Welcome Back
            </Typography>
            {/* sx={{color:"#4fd1c5"}} */}
            <Typography variant="body1" color={textColor} gutterBottom>
              Enter your email and password to sign in
            </Typography>
            <FormControl fullWidth>
              {/* <InputLabel shrink>Email</InputLabel> */}
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                placeholder="Your email address"
                type="email"
                size="small"
                InputLabelProps={{shrink:true}}
                sx={{ mb: 3, borderRadius: '15px' }}
              />
              {/* <InputLabel shrink>Password</InputLabel> */}
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                placeholder="Your password"
                type="password"
                size="small"
                InputLabelProps={{shrink:true}}
                sx={{ mb: 2, borderRadius: '15px' }}
              />
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Remember me"
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mb: 3,
                  height: 45,
                  fontSize: '10px',
                  fontWeight: 'bold',
                  backgroundColor:"#4fd1c5"
                  // '&:hover': { backgroundColor: theme.palette.primary.light },
                  // '&:active': { backgroundColor: theme.palette.primary.dark },
                }}
              >
                SIGN IN
              </Button>
            </FormControl>
            <Box textAlign="center" mt={2}>
              <Typography color={textColor} variant="body2">
                Don't have an account?
                <Link href="#" sx={{ ml: 1,color:"#4fd1c5" }}>
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <BackgroundBox>
          <BackgroundImage />
        </BackgroundBox>
      </Grid>
    </Container>
  );
};

export default BasicSignInComponent;

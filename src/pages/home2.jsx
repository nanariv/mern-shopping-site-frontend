import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './login';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        TaskHero!
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2];

const theme = createTheme();
const userid = localStorage.getItem('userid')?true:false


export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
       
        <Box
          sx={{
            bgcolor: 'background-color',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Task Hero 
               <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="TaskHero"
        src="https://cdn.glitch.global/f8c1bf21-4752-4d09-b925-7aa5de24b772/to-do-list.png?v=1670215114100"
      />
            </Typography>
            <Typography variant="h8" align="center" color="text.secondary" paragraph>
              It's an App to organize your tasks coz we know <bold> YOU </bold> are the one who gets everything done!
            </Typography> 
            {
              !userid && (
                 <Stack
                  sx={{ pt: 2 }}
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                >
              <Button variant="standard" href='/login' style={{background:'blue', color:'white'}}>login </Button>
            </Stack>
              )
            }
           
          </Container>
        </Box>
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
           <Copyright />
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          All Registered Trade Marks, company names, brand names and logos used on this Website are the property of their respective owners.Something here to give the footer a purpose!
        </Typography>
       
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
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


const theme = createTheme();
const user = localStorage.getItem('userName');

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
         
        <Box
          sx={{
            bgcolor: 'background.paper',
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
              About Task Hero 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Welcome <b>{user}</b> It's an App to organize your tasks coz we know <bold> YOU </bold> are the one who gets everything done!

            </Typography> 

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
            <Grid container spacing={4}>
              <Grid item key={3} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://cdn.glitch.global/f8c1bf21-4752-4d09-b925-7aa5de24b772/crud.png?v=1670211113154"
                    alt="Categorize"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Create, Read, Update & Delete
                    </Typography>
                    Create as many tasks as you want. 
                    Update it as you wish.
                    Delete or view your existing tasks whenever and wherever you like.
                    So, its your App! Use it as you like.
                    <Typography>
                      
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" href="/home2">Lets get started!</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://cdn.glitch.global/f8c1bf21-4752-4d09-b925-7aa5de24b772/category.png?v=1670207831909"
                    alt="Categorize"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Categorize
                    </Typography>
                    Lets level up your organizing game!
                    <bold> Task Hero</bold> has a feature to categorize your task into user define categories as when you categorize your work, it reflects your productivity and how you tackle tasks.
                    <Typography>
                      
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" href="/home2">Coming Soon!</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={2} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://cdn.glitch.global/f8c1bf21-4752-4d09-b925-7aa5de24b772/priority.jpeg?v=1670208640250"
                    alt="Priortize"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Priortize
                    </Typography>
                    <Typography>
                      Establishing priorities is necessary in order to complete everything that needs to be done. Prioritization is important because it with allow you to give your attention to tasks that are important and urgent so that you can later focus on lower priority tasks.
                      That's <bold>Task Hero</bold> has a feature to add priority to your tasks
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" href="/home2">Coming Soon!</Button>
                  </CardActions>
                </Card>
              </Grid>
              
          </Grid>
        </Container> 
        
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
          All Registered Trade Marks, company names, brand names and logos used on this Website are the property of their respective owners.
        </Typography>
       
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
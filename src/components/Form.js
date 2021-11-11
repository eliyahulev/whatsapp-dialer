import React, {useState , useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CountryList from './CountryList';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

function WhatsappForm () {
  const [list , setList] = useState([]);
  


  useEffect(() => {
    console.log('yup');
    localStorage.setItem('List', JSON.stringify(list));
  },[list]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let number = data.get('number');
    const countryCode = data.get('countryCode');
    let fullNumber;
    number = number.replace(/^0+/, '');

    fullNumber = countryCode + number;
    setList(list => [...list, fullNumber]);
    window.location.href = `https://wa.me/${fullNumber}`;
    console.log(list);

    
  };
 
  const listOfNumbers = list.map((value,i) => 
    <ListItem disablePadding key={i}>
      <ListItemText primary={value} />
    </ListItem>
          
  )

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Typography component="h1" variant="h5">
            Whatsapp Dialer
          </Typography>
         
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <CountryList/>
            <TextField
              margin="normal"
              type="tel"
              
              fullWidth
              id="Number"
              label="Number"
              name="number"
              autoComplete="off"
              autoFocus
            />
            
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Save Number"
            /> */}
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Open in Whatsapp
            </Button>
            
          </Box>
          <Box sx={{ width: '100%'}}>
          <List>
          {listOfNumbers}
          </List>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}

export default WhatsappForm
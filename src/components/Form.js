import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CountryList from './CountryList';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

function WhatsappForm () {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let number = data.get('number');
    const countryCode = data.get('countryCode');
    let fullNumber;
    number = number.replace(/^0+/, '');

    fullNumber = countryCode + number;
    window.location.href = `https://wa.me/${fullNumber}`;
    
  
  };

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
              
              fullWidth
              id="Number"
              label="Number"
              name="number"
              autoComplete="Number"
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
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}

export default WhatsappForm
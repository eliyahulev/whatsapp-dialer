import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function CountryList(){
    const [country, setCountry] = useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };
    return(

        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={country}
            name="countryCode"
            label="Country"
            onChange={handleChange}
          >
            <MenuItem data-countrycode="IL" value="972">Israel (+972)</MenuItem>
            <MenuItem data-countrycode="GB" value="44">UK (+44)</MenuItem>
            <MenuItem data-countrycode="FR" value="33">France (+33)</MenuItem>
            <MenuItem data-countrycode="US" value="1">USA (+1)</MenuItem>
            
          </Select>
        </FormControl>
      </Box>
            
   
    )
}

export default CountryList;

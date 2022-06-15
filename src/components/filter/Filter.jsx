import { Button, ButtonGroup, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Slider } from '@mui/material'
import React, { useState } from 'react'

const Filter = ({setGenreFilter,priceFilter,handleReset,splitPrice,showFilterValue,handleFilterClick ,setSort,handleSortClick}) => {
    /* const[genreFilter,setGenreFilter]=useState()
    const[priceFilter,setPriceFilter]=useState([200,400])
    const[lessThanPrice,setLessThanPrice]=useState(200)
    const[moreThanPrice,setMoreThanPrice]=useState(400) */

    const marks=[
        {value:0,
        label:"free"},
        {value:1000,
        label:"<1000"},
        
    ]
    

  return (
    <>
        <div>Sort & filter </div>
        <FormControl>
            <FormLabel>Sort by price </FormLabel>
            <RadioGroup onChange={(e)=>{setSort(e.target.value)}}>
                <div>
            <FormControlLabel value="price" control={<Radio/>} label="Low to high" />
            <FormControlLabel value="price_reverse" control={<Radio/>} label="high to low" />
                </div>
            
            <FormLabel>Sort by Name </FormLabel>
            
                <div>
            <FormControlLabel value="name" control={<Radio/>} label="A to Z" />
            <FormControlLabel value="name_reverse" control={<Radio/>} label="Z to A" />
                </div>
            </RadioGroup>
            <Button color="success" variant="contained" onClick={handleSortClick} >sort</Button>
        </FormControl>
        <FormControl>
            <FormLabel>Filter by genre</FormLabel>
            <RadioGroup onChange={(e)=>{setGenreFilter(e.target.value)}}>
                <div>
                <FormControlLabel value="romance" control={<Radio/>} label="romance" />
                <FormControlLabel value="mystery" control={<Radio/>} label="mystery" />
                <FormControlLabel value="fantasy" control={<Radio/>} label="fantasy" />
                <FormControlLabel value="horror" control={<Radio/>} label="horror" />
                </div>
                <div>
                <FormControlLabel value="fiction" control={<Radio/>} label="fiction" />
                <FormControlLabel value="biography" control={<Radio/>} label="biography" />
                <FormControlLabel value="sciFi" control={<Radio/>} label="sci-fi" />
                <FormControlLabel value="selfHelp" control={<Radio/>} label="self help" />
                </div>
            </RadioGroup>
        </FormControl>
        <div>
            <FormLabel>filter by price</FormLabel>
            <Slider  value={priceFilter} valueLabelFormat={(value)=>showFilterValue(value) } sx={{width:"80%"}} min={0} max={1100} step={100} valueLabelDisplay="auto" marks={marks} onChange={splitPrice} />
        </div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={handleFilterClick} color="success">Filter</Button>
            <Button onClick={handleReset} color="secondary" >Reset</Button>
        </ButtonGroup>
    </>
  )
}

export default Filter

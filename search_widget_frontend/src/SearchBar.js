import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css'

function SearchBar() {
    return (
        <div className="search-bar">
            <div className='dropdown-div'>
                <LocationOnIcon color="secondary" style={{ fontSize: 25 }} ></LocationOnIcon>
                <select name="location" id="location">
                    <option value="1">IIT BHU</option>
                    <option value="2">IIT Guest House</option>
                    <option value="3">IIT Guest House</option>
                    <option value="4">IIT Guest House</option>
                </select>
            </div>
            <div className="devider"></div>
            <div className="search-div">
                <SearchIcon style={{ fontSize: 25 }} ></SearchIcon>
                <input placeholder="Search for product" id="searchtext" name="searchtext"></input>
            </div>
        </div>
    )
}

export default SearchBar

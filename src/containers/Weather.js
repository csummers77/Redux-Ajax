import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
// Weather needs to know about Redux
// the reason for this is because the weather state
// is going to be updated by the the SearchBar
// and the SearchBar
class Weather extends Component{
    render(){
        return(
            <h1>Weather Component!!</h1>
        )
    }
}

export default Weather;
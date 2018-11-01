

import React from 'react'

class RestaurantInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {

        const array = [
            { name: 'zen asian grill', id: 'zen-asian-grill-davenport?osq=zen+asian+grill' },
            { name: "Pa'l Campo Chicken", id: 'pal-campo-restaurant-orlando?osq=Pa%27l+Campo+Chicken' },
            { name: 'Mannino’s Pizza', id: 'mannino-pizzaria-davenport?osq=Mannino%27s+Pizza' },
            { name: 'San Jose’s Original Mexican', id: 'san-joses-original-mexican-restaurant-ocoee?osq=San+Jose%27s+Original+Mexican' },

        ]

        const CLIENT_ID = '7DuRDWM8HxmzmB4SAiJMBA'
        const API_KEY = 'Ha9u6qh_W112Q0kuDn74gqSSSjij78eaaf1MCeIRXmXx2MBHtAznb6w1cosj2tyTgdyHJOMWkUIe_I8yIYSZUSdGKhufa9Fv7EYXWYYwaOWHFqjtOi7Ow9_1QL9lW3Yx'
        const urlArray = array.map(item => 'https://api.yelp.com/v3/businesses/' + item.id)

        var obj = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer' + ' ' + API_KEY
            }
        
        }

        urlArray.forEach( item => {
            fetch(urlArray, obj)
                .then(resp => resp.json())
                .then(jsonData => {
                    console.log(jsonData)
                    this.setState({ ...this.state, data: [ ...this.state.data, jsonData.result ] })
                })
        })
        setTimeout( () => console.log(this.state.data) , 3000)
    }


    render() {

        return(
            <div>
                <ul>
                    {this.state.data && this.state.data.map( item => <li>{item.name} {item.rating}</li> )}
                </ul>
            </div>
        )
    }
}

export default RestaurantInfo


import React, { Component } from 'react'
import RestaurantInfo from '../components/RestaurantInfo/RestaurantInfo'

export default class InfoContainer extends Component {
    render() {
        return (
            <div>
                <h3 className="title">Additional Services</h3>
                <RestaurantInfo />
            </div>
        )
    }
}

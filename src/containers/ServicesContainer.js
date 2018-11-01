

import React, { Component } from 'react'
import Massage from '../components/MassageInfo'
import StrollerInfo from '../components/StrollerInfo'
import GroceryInfo from '../components/GroceryInfo'



export default class InfoContainer extends Component {
    render() {
        return (
            <div>
                <h3 className="title">Additional Services</h3>
                <StrollerInfo />
                <GroceryInfo />
                <Massage />
            </div>
        )
    }
}



import React, { Component } from 'react'
import Massage from '../components/MassageInfo/MassageInfo'
import StrollerInfo from '../components/StrollerInfo/StrollerInfo'
import GroceryInfo from '../components/GroceryInfo/GroceryInfo'



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

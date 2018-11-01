

import React, { Component } from 'react'
import EmergencyInfo from '../components/EmergencyInfo'



export default class EmergencyContainer extends Component {
    render() {
        return (
            <div>
                    <h3 className="title">Emergency</h3>
                    <EmergencyInfo />
            </div>
        )
    }
}

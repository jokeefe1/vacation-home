

import React, { Component } from 'react'
import WifiInfo from '../components/WifiInfo'
import CheckoutInfo from '../components/CheckoutInfo'
import PoolInfo from '../components/PoolInfo' 
import HouseRulesInfo from '../components/HouseRulesInfo';
import AddressInfo from '../components/AddressInfo'
import HostInfo from '../components/HostInfo';


export default class InfoContainer extends Component {
    render() {
        return (
            <div>
                <h3 className="title">House Information</h3>
                <WifiInfo />
                <AddressInfo />
                <HouseRulesInfo />
                <PoolInfo />
                <CheckoutInfo />
                <HostInfo />
            </div>
        )
    }
}



import React, { Component } from 'react'
import WifiInfo from '../components/WifiInfo/WifiInfo'
import CheckoutInfo from '../components/CheckoutInfo/CheckoutInfo'
import PoolInfo from '../components/PoolInfo/PoolInfo' 
import HouseRulesInfo from '../components/HouseRulesInfo/HouseRulesInfo';
import AddressInfo from '../components/AddressInfo/AddressInfo'
import HostInfo from '../components/HostInfo/HostInfo';


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

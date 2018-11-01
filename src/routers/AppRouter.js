

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MiniDrawer from '../components/MiniDrawer';
import WifiInfo from '../components/WifiInfo'
import PoolInfo from '../components/PoolInfo';
import InfoContainer from '../containers/InfoContainer'
import EmergencyContainer from '../containers/EmergencyContainer'
import ServicesContainer from '../containers/ServicesContainer'
import RestaurantContainer from '../containers/RestaurantContainer'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <MiniDrawer>
                <Switch>
                    <Route path='/' component={InfoContainer} exact={true} />
                    <Route path='/emergency' component={EmergencyContainer} />
                    <Route path='/services' component={ServicesContainer} />
                    <Route path='/restaurants' component={RestaurantContainer} />
                    <Route component={WifiInfo} />
                </Switch>
            </MiniDrawer>
        </div>
    </BrowserRouter>
)

export default AppRouter
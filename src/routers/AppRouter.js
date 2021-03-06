

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import MiniDrawer from '../components/MiniDrawer/MiniDrawer';
import PersistentDrawer from '../components/PersitentDrawer/PersistentDrawer'
import WifiInfo from '../components/WifiInfo/WifiInfo'
import InfoContainer from '../containers/InfoContainer'
import EmergencyContainer from '../containers/EmergencyContainer'
import ServicesContainer from '../containers/ServicesContainer'
import RestaurantContainer from '../containers/RestaurantContainer'
import Hero from '../components/Hero/Hero';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <PersistentDrawer>
                <Switch>
                    <Route path='/' component={Hero} exact={true} />
                    <Route path='/emergency' component={EmergencyContainer} />
                    <Route path='/services' component={ServicesContainer} />
                    <Route path='/restaurants' component={RestaurantContainer} />
                    <Route component={WifiInfo} />
                </Switch>
            </PersistentDrawer>
        </div>
    </BrowserRouter>
)

export default AppRouter
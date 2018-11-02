

import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RestaurantMenu from '@material-ui/icons/RestaurantMenu';
import Info from '@material-ui/icons/Info';
import Place from '@material-ui/icons/Place'
import LocalHospital from '@material-ui/icons/LocalHospital'
import AllInclusive from '@material-ui/icons/AllInclusive'

export const mailFolderListItems = (
    <div>
        <ListItem component={Link} to="/" button>
            <ListItemIcon>
                <Info />
            </ListItemIcon>
            <ListItemText primary="House Info" />
        </ListItem>
        {/* <ListItem button>
            <ListItemIcon>
                <Place />
            </ListItemIcon>
            <ListItemText primary="Attractions" />
        </ListItem>
        <ListItem component={Link} to="/restaurants" button>
            <ListItemIcon>
                <RestaurantMenu />
            </ListItemIcon>
            <ListItemText primary="Restaurants" />
        </ListItem> */}
        <ListItem component={Link} to="/emergency" button>
            <ListItemIcon>
                <LocalHospital />
            </ListItemIcon>
            <ListItemText primary="Emergency" />
        </ListItem>
    </div>
);

export const otherMailFolderListItems = (
    <div>
        <ListItem component={Link} to="/services" button>
            <ListItemIcon>
                <AllInclusive />
            </ListItemIcon>
            <ListItemText primary="Additional Services" />
        </ListItem>
    </div>
);
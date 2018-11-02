import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import AccessTime from '@material-ui/icons/AccessTime'


const styles = {
    card: {
        minWidth: 275,
        marginTop: 20,
        marginBottom: 20,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function CheckoutInfo(props) {
    const { classes } = props;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        <ListItemIcon>
                            <AccessTime />
                        </ListItemIcon>
                        Checkout
                    </Typography>
                    <br />
                    <Typography variant="subheading" component="h2">
                        <ul className="list">
                            <li>Check out time is no later than 12PM. Should you need a later checkout time please inform us in advance. We will accommodate you as best as we can if we do not have guests checking in the same day, but cannot guarantee this accommodation.</li>
                            <li>Please do a thorough sweep of the house to ensure you have all your belonging.</li>
                            <li>Place trash in bins located in the garage.</li>
                            <li>Load dirty dishes in the dishwasher and run load before leaving.</li>
                            <li> Place all dirty towels/linens in pile in the tub of bathroom</li>
                            <li>Fill out our guest book with any comments or recommendations that you have.</li>
                            <li>Have a safe trip home and we hope to see you again soon! ;-)</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

CheckoutInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckoutInfo);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Wifi from '@material-ui/icons/Wifi'


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

function WifiInfo(props) {
    const { classes } = props;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        <ListItemIcon>
                            <Wifi />
                        </ListItemIcon>
                        Wifi
                    </Typography>
                    <br />
                    <Typography className={classes.pos} color="textSecondary">
                        Network
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        102Birchwood
                    </Typography>
                    <br />
                    <Typography className={classes.pos} color="textSecondary">
                        Password
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        WelcomeHome
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

WifiInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WifiInfo);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import People from '@material-ui/icons/People';

import {
    CONTACT_1_NAME,
    CONTACT_1_PHONE,
    CONTACT_2_NAME,
    CONTACT_2_PHONE
} from '../../homeSettings';

const styles = {
    card: {
        minWidth: 275,
        marginTop: 20,
        marginBottom: 20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        marginBottom: 16,
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
};

function HostInfo(props) {
    const { classes } = props;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        Contact Hosts
                    </Typography>
                    <br />
                    <Typography className={classes.title} color="textSecondary">
                        {CONTACT_1_NAME}
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        {CONTACT_1_PHONE}
                    </Typography>
                    <br />
                    <Typography className={classes.title} color="textSecondary">
                        {CONTACT_2_NAME}
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        {CONTACT_2_PHONE}
                    </Typography>
                    <br />
                    <Typography variant="subheading" component="h2">
                        <p>
                            We have been diligent in stocking the home with
                            everything you need to be a fully functioning well
                            equipped home.
                        </p>
                        <p>
                            If we missed something important please message us
                            and we will do our best to provide you with it.
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

HostInfo.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HostInfo);

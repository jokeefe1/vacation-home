import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import LocalHospital from '@material-ui/icons/LocalHospital'


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

function EmergencyInfo(props) {
    const { classes } = props;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        <ListItemIcon>
                            <LocalHospital />
                        </ListItemIcon>
                        Emergency Contacts
                    </Typography>
                    <br />
                    <Typography className={classes.title} color="textSecondary">
                        List of emergency/Important number located in the kitchen next to the garage door. Should any emergency arise please contact us immediately after speaking with emergency services. 407-625-9377 OR 407-319-0766

                    </Typography>
                    <Typography variant="subheading" component="h2">
                        Emergency - Police, Fire Department, or Medical Services
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        Dial 911
                    </Typography>
                    <br />
                    <Typography variant="subheading" component="h2">
                        Non-Emergency - Police
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        321-235-5300
                    </Typography>
                    <br />
                    <Typography variant="subheading" component="h2">
                        Poison Control/ Veneno
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        1-800-222-1222
                    </Typography>
                    <br />
                    <Typography variant="subheading" component="h2">
                        Polk Animal Control
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        863-577-1762
                    </Typography>
                    <br />
                    <Typography variant="subheading" component="h2">
                        Nearest Hospital - Heart of Florida
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        863-422-4971
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        401 US 27, Davenport, Fl 33897
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

EmergencyInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmergencyInfo);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Home from '@material-ui/icons/Home'

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

function HouseRulesInfo(props) {
    const { classes } = props;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        House Rules
                    </Typography>
                    <br />
                    <Typography variant="subheading" component="h2">
                        <ul className="list">
                            <li>Do not give your door code to anyone other than guest staying in the home.</li>
                            <li>Please ensure all doors and windows are locked when leaving.</li>
                            <li>Living room TV is equipped is logged into Netflix and Pandora. Amazon is also uploaded. To access movies just log on using your login info. Please remember to log off before checkout to avoid movie purchases by any unauthorized user. To access these features just press the house icon located in the bottom center of the remote & feel free to add stations to Pandora!</li>
                            <li>Please be mindful and do not leave doors and windows open if A/C is running.</li>
                            <li>Do not use liquid soap in the dishwasher, use only dishwasher pods provided.</li>
                            <li>We do not want unwanted guests. Please do not leave food and/or drinks laying around.</li>
                            <li>We have provided you with an extra roll of toilet paper placed under the sinks of each bathroom. Need for additional rolls to be provided by guests.</li>
                            <li>We have provided several games for your enjoyment, please place pieces back in the correct boxes when done.</li>
                            <li>Parties that include outside guest other than those originally staying are not permitted, and we ask that you be considerate of loud music and/or any disruptive activities that may disturb neighbors or damage home/furnishing.  Guests will be responsible for any damage incurred during stay.</li>
                            <li>No illegal activities including underage drinking permitted.</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

HouseRulesInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HouseRulesInfo);
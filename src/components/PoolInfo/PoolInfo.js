import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Pool from '@material-ui/icons/Pool'

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

function PoolInfo(props) {
    const { classes } = props;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        <ListItemIcon>
                            <Pool />
                        </ListItemIcon>
                        Pool Rules
                    </Typography>
                    <br />
                    <Typography className={classes.title} color="textSecondary">
                        Safety is our top priority.
                    </Typography>
                    <Typography variant="subheading" component="h2">
                        <ul className="list">
                            <li>No diving allowed.</li>
                            <li>Do not leave children in or near pool area unsupervised, regardless of whether they can swim.</li>
                        </ul>
                     </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

PoolInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PoolInfo);
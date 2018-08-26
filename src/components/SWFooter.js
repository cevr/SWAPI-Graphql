import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6
    }
});

function SWFooter({ classes, title, description }) {
    return (
        <footer className={classes.footer}>
            <Typography variant="title" align="center" gutterBottom>
                {title}
            </Typography>
            <Typography variant="subheading" align="center" color="textSecondary" component="p">
                {description}
            </Typography>
        </footer>
    );
}

SWFooter.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default withStyles(styles)(SWFooter);

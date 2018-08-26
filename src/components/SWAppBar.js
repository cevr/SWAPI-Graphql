import React from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import Right from '@material-ui/icons/KeyboardArrowRight';
import Left from '@material-ui/icons/KeyboardArrowLeft';
import PropTypes from 'prop-types';

const styles = theme => ({
    appBar: {
        position: 'relative'
    },
    icon: {
        marginRight: theme.spacing.unit * 2
    }
});

function SWAppBar({ classes, title }) {
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Left />
                <Typography variant="title" color="inherit" noWrap>
                    {title}
                </Typography>
                <Right />
            </Toolbar>
        </AppBar>
    );
}

SWAppBar.propTypes = {
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(SWAppBar);

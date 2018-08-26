import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Button, withStyles, Input, ButtonBase } from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';

const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4
    },
    searchBarContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    searchBar: {
        width: 400
    },
    search: {
        fontWeight: 'bolder'
    }
});

const buttonTypes = {
    people: 'people',
    starships: 'starships',
    planets: 'planets'
};

function SWHeader({ classes, title, searchingFor, onSearch, onClick, refetch, onSearchClear }) {
    return (
        <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
                <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="title" align="center" color="textSecondary" paragraph>
                    Search for your favourite star wars <span className={classes.search}>{searchingFor}</span>
                </Typography>
                <div className={classes.searchBarContainer}>
                    <Input className={classes.searchBar} onKeyPress={event => onSearch(event, refetch)} />
                    <ButtonBase onClick={() => onSearchClear(refetch)}>
                        <Clear />
                    </ButtonBase>
                </div>
                <div className={classes.heroButtons}>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                            <Button variant="outlined" color="primary" onClick={() => onClick(buttonTypes.people)}>
                                People
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary" onClick={() => onClick(buttonTypes.starships)}>
                                Starships
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary" onClick={() => onClick(buttonTypes.planets)}>
                                Planets
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

SWHeader.propTypes = {
    title: PropTypes.string.isRequired,
    searchingFor: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    refetch: PropTypes.func
};

export default withStyles(styles)(SWHeader);

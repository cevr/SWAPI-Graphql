import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, ButtonBase } from '@material-ui/core';
import classNames from 'classnames';
import Right from '@material-ui/icons/KeyboardArrowRight';
import Left from '@material-ui/icons/KeyboardArrowLeft';

import { SWCard } from '../components';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    pagination: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        fontSize: 50
    },
    hidden: {
        visibility: 'hidden'
    }
});

function hideOnLowerLimit(page, classes) {
    return page - 1 <= 0 ? classes.hidden : null;
}

/**
 * TODO: Implement pagination
 * Maybe add a current page count indicator in the props
 */
const Gallery = ({ classes, cards, page, refetch, onPageClick }) => {
    return (
        <div className={classes.container}>
            <ButtonBase onClick={() => onPageClick(page - 1, refetch)} className={hideOnLowerLimit(page, classes)}>
                <div className={classes.pagination}>
                    <Left className={classes.icon} />
                </div>
            </ButtonBase>

            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container spacing={40}>
                    {cards.map((card, key) => (
                        <Grid item key={key} sm={6} md={4} lg={3}>
                            <SWCard info={card} />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <ButtonBase onClick={() => onPageClick(page + 1, refetch)}>
                <div className={classes.pagination}>
                    <Right className={classes.icon} />
                </div>
            </ButtonBase>
        </div>
    );
};

Gallery.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(Gallery);

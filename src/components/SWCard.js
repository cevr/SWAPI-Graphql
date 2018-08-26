import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles, ButtonBase } from '@material-ui/core';

const styles = {
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9
    },
    cardContent: {
        flexGrow: 1
    }
};

function SWCard({ classes, info }) {
    return (
        <Card className={classes.card}>
            <ButtonBase>
                <CardMedia className={classes.cardMedia} image="src" title="Image title" />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="headline" component="h2">
                        {info.name}
                    </Typography>
                    <Typography>{info.description}</Typography>
                </CardContent>
            </ButtonBase>
        </Card>
    );
}

SWCard.propTypes = {
    info: PropTypes.object.isRequired
};

export default withStyles(styles)(SWCard);

import React from 'react';
import { Query } from 'react-apollo';
import Spinner from 'react-spinkit';
import { withStyles } from '@material-ui/core';

const styles = {
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10vh',
        minHeight: 700
    }
};

function DefaultLoadingRender({ classes }) {
    return (
        <div className={classes.loading}>
            <Spinner name="ball-scale-ripple" fadeIn="none" />
        </div>
    );
}

function Loading({ LoadingRender = DefaultLoadingRender, classes, ...props }) {
    return (
        <Query {...props}>
            {({ loading, ...queryResponse }) => {
                if (loading) {
                    return <LoadingRender classes={classes} />;
                }
                return props.children(queryResponse);
            }}
        </Query>
    );
}

export default withStyles(styles)(Loading);

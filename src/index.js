import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo/client';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[900]
        }
    }
});
function Main() {
    return (
        <ApolloProvider client={client}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </ApolloProvider>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

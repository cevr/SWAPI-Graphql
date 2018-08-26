import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { SWAppBar, SWHeader, SWFooter, Query } from './components';
import { Gallery } from './containers';
import { QUERY_PEOPLE, QUERY_STARSHIPS, QUERY_PLANETS } from './apollo/queries';

const queries = {
    people: QUERY_PEOPLE,
    starships: QUERY_STARSHIPS,
    planets: QUERY_PLANETS
};

//this saves the first page so that the pagination is endless
function savePage(url) {
    let cache = 0;
    return function() {
        if (url) {
            const val = getCurrentPage(url);
            cache = val;
            return val;
        } else {
            return cache;
        }
    };
}
function getCurrentPage(url) {
    return +url.split('=')[1] - 1;
}

class App extends Component {
    state = {
        searchingFor: 'people',
        refetch: () => {}
    };
    onPageClick = (page, refetch) => {
        refetch({
            page: page
        });
    };

    onSearchClear = refetch => {
        console.log('hello')
        refetch({
            name: ''
        });
    };
    onSearchType = type => this.setState({ searchingFor: type });

    onSearch = ({ key, target: { value } }, refetch) => {
        if (key === 'Enter') {
            refetch({
                name: value
            });
        }
    };

    render() {
        const { searchingFor } = this.state;
        return (
            <Fragment>
                <CssBaseline />
                <SWAppBar title="SWAPI" />
                <main>
                    <Query query={queries[searchingFor]}>
                        {({ data, refetch }) => {
                            const page = savePage(data[searchingFor].next)();
                            return (
                                <Fragment>
                                    <SWHeader
                                        searchingFor={searchingFor}
                                        onClick={this.onSearchType}
                                        onSearch={this.onSearch}
                                        refetch={refetch}
                                        onSearchClear={this.onSearchClear}
                                        title="SWAPI"
                                    />
                                    <Gallery
                                        cards={data[searchingFor].results}
                                        page={page}
                                        refetch={refetch}
                                        onPageClick={this.onPageClick}
                                    />
                                </Fragment>
                            );
                        }}
                    </Query>
                </main>
                {/* Footer */}
                <SWFooter title="SWAPI" description="Made using GraphQL, React, and SWAPI" />
                {/* End footer */}
            </Fragment>
        );
    }
}

export default App;

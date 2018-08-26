import gql from 'graphql-tag';
export const QUERY_PLANETS = gql`
    query($name: String, $page: Int) {
        planets(name: $name, page: $page) {
            count
            next
            previous
            results {
                name
            }
        }
    }
`;

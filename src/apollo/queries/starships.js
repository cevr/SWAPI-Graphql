import gql from 'graphql-tag';
export const QUERY_STARSHIPS = gql`
    query($name: String, $page: Int) {
        starships(name: $name, page: $page) {
            count
            next
            previous
            results {
                name
            }
        }
    }
`;

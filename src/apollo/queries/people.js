import gql from 'graphql-tag';
export const QUERY_PEOPLE = gql`
    query($name: String, $page: Int) {
        people(name: $name, page: $page) {
            count
            next
            previous
            results {
                name
                height
                starships
                gender
            }
        }
    }
`;

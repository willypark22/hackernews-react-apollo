import React from 'react';
import Link from './Link';
import { useQuery, gql} from '@apollo/client';

// This variable uses gql (library that uses tagged template literals)
// query document passed into useQuery hook in LinkList component

const FEED_QUERY = gql`
    {
        feed {
            id
            links {
                id
                createdAt
                url
                description
            }
        }
    }
`;

const LinkList = () => {
    // Hard coded database
    // const linksToRender = [
    //     {
    //         id: '1',
    //         description: 'Prisma gives you a more powerful database toolkit 😎',
    //         url: 'https://prisma/io'
    //     },
    //     {
    //         id: '2',
    //         description: 'The best GraphQL client',
    //         url: 'https://www.apollographql.com/docs/react/'
    //     }
    // ];

    // Database using queries
    const { data } = useQuery(FEED_QUERY);

    return (
        <div>
            {/* There won't be any info on data initially. */}
            {/* Therefore have to check it is truthy */}
            {data && (
                <>
                    {data.feed.links.map((link) => (
                        <Link key={link.id} link={link} />
                    ))}
                </>
            )}
        </div>
    );
};

export default LinkList;

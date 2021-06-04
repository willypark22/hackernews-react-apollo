import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { AUTH_TOKEN, LINKS_PER_PAGE } from '../Constants';
import { timeDifferenceForDate } from '../utils';

// Simple component that expects a link in its prop
// and renders the link's description and url
const Link = (props) => {
    const { link } = props;
    const authToken = localStorage.getItem(AUTH_TOKEN);

    const take = LINKS_PER_PAGE;
    const skip = 0;
    const orderBy = { createdAt: 'desc' };

    return (
        <div className="flex mt2 items-start">
            <div className="flex items-center">
                <span className="gray">
                    {props.index + 1}.
                </span>
                {authToken && (
                    <div className="ml1 gray f11" style={{ curosr: 'pointer' }} onClick={vote}>
                        ▲
                    </div>
                )}
            </div>
            <div className="ml1">
                {authToken && (
                    <div className="f6 lh-copy gray">
                        {link.votes.length} votes | by{' '}
                        {link.postedBy ? link.postedBy.name : 'Unknown'}{' '}
                        {timeDifferenceForDate(link.createdAt)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Link;

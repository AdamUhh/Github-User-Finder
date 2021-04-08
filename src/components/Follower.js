import React from 'react';

const Follower = ({ FollowerData }) => {
    return (
        <>
            <a target='_blank' href={`${FollowerData.html_url}`} rel='noreferrer'>
                <div className='result-left'>
                    <img alt='user pic' src={FollowerData.avatar_url} />
                </div>
                <p className='repo-title'>{FollowerData.login}</p>
            </a>
        </>
    );
};

export default Follower;

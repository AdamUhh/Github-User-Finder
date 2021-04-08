import React from 'react'

const Following = ({FollowingData}) => {
    return (
        <a target='_blank' href={`${FollowingData.html_url}`} rel='noreferrer'>
            <div className='result-left'>
                    <img alt='user pic' src={FollowingData.avatar_url} />
                </div>
            <p className='repo-title'>{FollowingData.login}</p>
        </a>
    )
}

export default Following

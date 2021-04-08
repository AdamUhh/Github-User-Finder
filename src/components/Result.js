import Profile from './Profile';
import Repo from './Repo';
import Follower from './Follower';
import Following from './Following';
import { useState, useEffect } from 'react';

const Result = ({ userData, userRepoData, userFollowerData, userFollowingData }) => {
    const [name, setName] = useState('Repositories');

    useEffect(() => {
        setName('Repositories');
    }, []);

    const changeToRepo = () => {
        setName('Repositories');
    };

    const changeToFollower = () => {
        setName('Followers');
    };

    const changeToFollowing = () => {
        setName('Following');
    };

    return (
        <div className='container container_result'>
            <Profile userData={userData} changeToRepo={changeToRepo} changeToFollower={changeToFollower} changeToFollowing={changeToFollowing} />
            <div className='profile-repo'>
                <h2>{name}</h2>
                {name === 'Repositories' && userRepoData.map((repoData, n) => <Repo key={n} repoData={repoData} />)}
                {name === 'Followers' && userFollowerData.map((FollowerData, n) => <Follower key={n} FollowerData={FollowerData} />)}
                {name === 'Following' && userFollowingData.map((FollowingData, n) => <Following key={n} FollowingData={FollowingData} />)}
            </div>
        </div>
    );
};

export default Result;

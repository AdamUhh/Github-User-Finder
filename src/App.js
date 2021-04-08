import './App.css';
import Result from './components/Result';
import Search from './components/Search';
import { useState } from 'react';

function App() {
    const [userData, setUserData] = useState('');
    const [userRepoData, setUserRepoData] = useState('');
    const [userFollowerData, setUserFollowerData] = useState('');
    const [userFollowingData, setUserFollowingData] = useState('');

    const fetchData = async (username) => {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        const userRepoRes = await fetch(`https://api.github.com/users/${username}/repos`);
        const userRepoData = await userRepoRes.json();
        const userFollowerRes = await fetch(`https://api.github.com/users/${username}/followers`);
        const userFollowerData = await userFollowerRes.json();
        const userFollowingRes = await fetch(`https://api.github.com/users/${username}/following`);
        const userFollowingData = await userFollowingRes.json();

        setUserRepoData(userRepoData);
        setUserFollowerData(userFollowerData);
        setUserFollowingData(userFollowingData);
        setUserData(userData);
    };

    return (
        <>
            <div className='container bg'>
                <h1>Search Github Users</h1>
                <Search onClick={fetchData} />
            </div>
            {userData && <Result userData={userData} userRepoData={userRepoData} userFollowerData={userFollowerData} userFollowingData={userFollowingData} />}
        </>
    );
}

export default App;

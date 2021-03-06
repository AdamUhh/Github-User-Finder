import Button from './Button';

const Profile = ({ userData, changeToRepo, changeToFollower, changeToFollowing }) => {
    return (
        <div className='profile'>
            <div className='profile-body'>
                <div className='profile-left'>
                    <img alt='user pic' src={userData.avatar_url} />
                </div>
                <div className='profile-right'>
                    <div className='profile-right-bio'>
                        <p>Name: {userData.name === null ? 'No Data Available' : userData.name}</p>
                        <p>Bio: {userData.bio === null ? 'No Data Available' : userData.bio}</p>
                        <p>Email: {userData.email === null ? 'No Data Available' : userData.email}</p>
                        <p>Member Since: {userData.created_at}</p>
                    </div>
                    <div className='profile-right-tags'>
                        <Button onClick={changeToRepo} name={'Public Repos: '} dataRef={userData.public_repos} className={'tag repo-tag public-tag'} />
                        <Button onClick={changeToFollower} name={'Followers: '} dataRef={userData.followers} className={'tag repo-tag follower-tag'} />
                        <Button onClick={changeToFollowing} name={'Following: '} dataRef={userData.following} className={'tag repo-tag following-tag'} />
                    </div>
                </div>
            </div>
            <div className='profile-bottom'>
                <a href={userData.html_url} target='_blank' rel='noreferrer'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='23' viewBox='0 0 24 23'>
                        <g id='Group_1' data-name='Group 1' transform='translate(-147 -375)'>
                            <ellipse id='Ellipse_1' data-name='Ellipse 1' cx='12' cy='11.5' rx='12' ry='11.5' transform='translate(147 375)' fill='#212121' />
                            <path
                                id='github'
                                d='M12,.5A11.9,11.9,0,0,0,0,12.292,11.812,11.812,0,0,0,8.2,23.48c.6.111.82-.254.82-.567,0-.28-.01-1.022-.015-2-3.338.711-4.042-1.582-4.042-1.582A3.143,3.143,0,0,0,3.633,17.6c-1.087-.731.084-.716.084-.716A2.51,2.51,0,0,1,5.555,18.1a2.584,2.584,0,0,0,3.495.981A2.5,2.5,0,0,1,9.81,17.5c-2.665-.3-5.466-1.309-5.466-5.827A4.505,4.505,0,0,1,5.579,8.513a4.126,4.126,0,0,1,.105-3.121s1.005-.316,3.3,1.209a11.506,11.506,0,0,1,6,0c2.28-1.525,3.285-1.209,3.285-1.209a4.24,4.24,0,0,1,.12,3.121,4.523,4.523,0,0,1,1.23,3.164c0,4.53-2.805,5.527-5.475,5.817a2.8,2.8,0,0,1,.81,2.182c0,1.578-.015,2.846-.015,3.229,0,.309.21.678.825.56A11.776,11.776,0,0,0,24,12.292,11.9,11.9,0,0,0,12,.5Z'
                                transform='translate(147 374.5)'
                                fill='#fff'
                            />
                        </g>
                    </svg>
                    <p>View profile</p>
                </a>
            </div>
        </div>
    );
};

export default Profile;

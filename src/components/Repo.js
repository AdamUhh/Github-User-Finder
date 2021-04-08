const Repo = ({ repoData }) => {
    return (
        <a target='_blank' href={`${repoData.html_url}`} rel='noreferrer'>
            <p className='repo-title'>{repoData.name}</p>
            <div className='repo-tag star-tag'>
                <p className='tag-title'>Stars:</p>
                <p className='tag-content'>{repoData.stargazers_count}</p>
            </div>
            <div className='repo-tag watcher-tag'>
                <p className='tag-title'>Watchers:</p>
                <p className='tag-content'>{repoData.watchers_count}</p>
            </div>
        </a>
    );
};

export default Repo;

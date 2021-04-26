import {React} from 'react'

function UserCard({userData}) {
    function isNull(text) {
        return text && text
    }

    return (
        <div className="card col z-depth-4">
            <div className="waves-effect waves-block waves-light center-align">
                <img className="circle card-img" src={userData.avatar_url} />
                <div className="card-title">{userData.login}</div>
                <div className="card-title">{userData.updated_at}</div>
            </div>
            <div className="card-content col m7">
                <span className="card-title">{isNull(userData.name)}</span>
                <span className="card-title">{isNull(userData.location)}</span>
                <span className="card-title">{isNull(userData.followers)} followers</span>
                <span className="card-title">{isNull(userData.following)} following</span>
                <span className="card-title">Repositories: {isNull(userData.public_repos)}</span>
                <span className="card-title">Created: {userData.created_at}</span>
                <span className="card-title"><a href={userData.html_url}>{userData.html_url}</a></span>
            </div>
        </div>
    )
}

export default UserCard
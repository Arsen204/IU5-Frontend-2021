import {React, useState, useEffect} from 'react'
import UserCard from './UserCard'

function UserPage({userName}) {
    const TOKEN = process.env.REACT_APP_API_KEY
    const [userData, setUserData] = useState({})
    const [error, setError] = useState(true)

    useEffect(async () => {
        if (userName) {
            const data = await fetch(
                `https://api.github.com/users/${userName}`)
                // {
                //   headers: {
                //   authorization: `token ${TOKEN}`
                //     }
                // })
                .then(res => {
                    if (res.ok) {
                        setError(false)
                        return res.json()
                    }
                })
            data && setUserData(data)
        }
    }, [userName])

    return error ? (
        <div>There is no such a github account...</div>
    ) : (
        <UserCard userData={userData} />
    )
}

export default UserPage
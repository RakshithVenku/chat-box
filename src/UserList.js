import React from 'react'
// import { Link } from 'react-router-dom'

const UserList = (props) => {

    const {userData} = props

    const newArr = []

    for (const user of userData) {
        if(!newArr.includes(user.name)) {
            newArr.push(user.name)
        }
    }

    return (
        <div>
            <h1> {userData.length} </h1>
            <ul>
                {
                    newArr.map((user, i) => {
                        return (
                            // <li key={i} > <Link to={`/users/${i}`} > {user} </Link> </li>
                            <li key={i} > {user}  </li>
                        )
                    })
                }
            </ul>
        </div>
        
    )
}

export default UserList
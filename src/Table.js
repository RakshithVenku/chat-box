import React from 'react'

const Table = (props) => {
    const {userData, isUploaded} = props
    return (
        <div>
            {isUploaded && (
                <table>
                    <thead>
                        <tr>
                            <th> Time </th>
                            <th> Name </th>
                            <th> message </th>
                            <th> IsPrivate </th>
                        </tr>   
                    </thead>
                    <tbody>
                        {userData.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td> {user.time} </td>
                                <td> {user.name} </td>
                                <td> {user.message} </td>
                                <td> {user.private ? 'true' : 'false'} </td>
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Table
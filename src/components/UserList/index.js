import React from 'react';

import User from '../User';

import './userList.css';

const UserList = (properties) => {

    const { userList } = properties; 
    return (
        <div>
            <ul>
                {userList.map((user, index)=> {

                    return (
                                <li>
                                    <User user={user}/>
                                </li>
                            
                            );})
                }
            </ul>
        </div>
    );
};

export default UserList;

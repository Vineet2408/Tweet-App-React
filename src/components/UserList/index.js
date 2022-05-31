import React from 'react';

import User from '../User';

import './userList.css';

import { useDispatch, useSelector } from 'react-redux';

import avatar from '../../images/avatar.jpg';
import { getAllUsers } from './action';

function selector (state) {
    return state.userListReducer;
}

const UserList = (properties) => {

    const dispatch = useDispatch();

    const userList = useSelector(selector);

    React.useEffect(()=>{
        dispatch(getAllUsers());
    }, []);
    
    if (userList === undefined || userList === null) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="userList-wrapper">
            <ul className="userList">
                {userList.map((user, index)=> {

                    return (
                                <li className="d-flex" key={index}>
                                    <User user={user}/>
                                </li>
                            
                            );
                })
                }
            </ul>
        </div>
    );
};

export default UserList;

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

    const [userList, setUserList] = React.useState();

    const dispatch = useDispatch();

    const userListStateReducer = useSelector(selector);

    React.useEffect(()=>{
        dispatch(getAllUsers());
    }, []);

    React.useEffect(()=> {
        setUserList(userListStateReducer);
    }, [userListStateReducer]);

    // const userList = [
    //     {
    //         firstName: 'Thor',
    //         lastName: 'Odinson',
    //         gender: 'MALE',
    //         username: 'thunderer',
    //         dob: '01-08-2000',
    //         email: 'asgardian@gmail.com',
    //         avatarLink: avatar
    //     },
    //     {
    //         firstName: 'Steve',
    //         lastName: 'Rogers',
    //         gender: 'MALE',
    //         username: 'Captain',
    //         dob: '01-08-2000',
    //         email: 'ca@gmail.com',
    //         avatarLink: avatar
    //     },
    //     {
    //         firstName: 'T',
    //         lastName: 'challa',
    //         gender: 'MALE',
    //         username: 'Panther',
    //         dob: '01-08-2000',
    //         email: 'blackPanther@vakanda.com',
    //         avatarLink: avatar
    //     }
    // ];

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

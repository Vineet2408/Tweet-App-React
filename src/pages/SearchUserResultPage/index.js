import React from 'react';

import { useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar';

import User from '../../components/User';

function selector(state) {
    return state.userReducer;
}

const SearchUserResultPage = (properties) => {

    const state = useSelector(selector);

    console.log("state = ", state);
    if (state === undefined && state === null ) {
        return <SearchBar />
    }

    return (
        <div style={{paddingTop: "24px"}}>
            <SearchBar />
            <div className="d-flex justify-center" style={{marginTop: "24px"}}>
            <div className="userList-wrapper">
            <ul className="userList">
                {state.map((user, index)=> {

                    return (
                                <li className="d-flex" key={index}>
                                    <User user={user}/>
                                </li>
                            
                            );
                })
                }
            </ul>
        </div>
            </div>
        </div>
    );
};

export default SearchUserResultPage;

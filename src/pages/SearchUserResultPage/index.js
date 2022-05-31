import React from 'react';

import { useSelector } from 'react-redux';

import User from '../../components/User';

function selector(state) {
    return state.userReducer;
}

const SearchUserResultPage = (properties) => {

    const state = useSelector(selector);

    console.log("state = ", state);
    if (state === undefined && state === null ) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="card">
        <ul className="col clgp-24">
            {
                state.map((user,index) => {
                   return (<li key={index}>
                        <User user={user}/>
                    </li>)
                })
            }
        </ul>
        </div>
    );
};

export default SearchUserResultPage;

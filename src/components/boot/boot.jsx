import React from 'react';
import { useSelector } from 'react-redux';
//coponentes
import AddBoot from './AddBoot';
import DeleteBoot from './DeleteBoot';
import UpdateBoot from './UpdateBoot';
import SearchBoot from './SearchBoot';

const Boot = () => {
    const users= useSelector(state=>state.users)

    return (
        <div>
            <br />
            <AddBoot />
            <DeleteBoot/>
            <UpdateBoot/>
            <SearchBoot users={users}/>
            <p>{"=".repeat(50)}</p>
            <h3>users</h3>
            {users.map((user,index)=>{
                return <li key={index}>{user.email}-{user.name}-{user.age}</li>
            })}
        </div>
    );
};

export default Boot;
import React from 'react'
import UsersList from '../components/UsersList';

const Users =() => {
    const USERS = [{
        id: 'u1', 
        name: 'Jurgest', 
        image:'https://images.pexels.com/photos/8185047/pexels-photo-8185047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        places: '3'}]

    return <UsersList items={USERS} />;
};

export default Users;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updateUser = { name, email };
        //send  data to the server 
        const url = `http://localhost:5000/user/${id}`;
        fetch( url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("user succesfull done");
                event.target.reset();
            })
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <form onSubmit={handleUpdateUser} >
                <input type="text" name="name" placeholder='name' id="" /> <br />
                <input type="email" name="email" placeholder='email' id="" /> <br />
                <input type="submit" value="Update user" />

            </form>
        </div>
    );
};

export default UpdateUser;
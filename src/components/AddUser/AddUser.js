import React from 'react';

const AddUser = () => {
    const handleAdduser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };
        //send  data to the server 
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1>Please Add new user!!</h1>
            <form onSubmit={handleAdduser} >
                <input type="text" name="name" placeholder='name' id="" /> <br />
                <input type="email" name="email" placeholder='email' id="" /> <br />
                <input type="submit" value="Add user" />

            </form>
        </div>
    );
};

export default AddUser;
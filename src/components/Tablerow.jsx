import React from 'react';

function Tablerow({ user }) {
    const { name, id, email } = user;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    );
}

export default Tablerow;
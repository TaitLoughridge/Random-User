import React from 'react';
import 'bulma/css/bulma.css'
import './RandomUser.css'
import { Card } from 'bloomer/lib/components/Card/Card';

function RandomUser(props) {
    const {userData } = props;
        return (
            
            <ul>
                {userData.map(user => (
                    <li className='user-card'>
                    <Card className='user-card' key={user.login.uuid}>
                    <img 
                        src={user.picture.large} 
                        alt={`${user.name.first} ${user.name.last}`}/>
                    <p>
                        {user.name.first} {user.name.last}
                    </p>
                    </Card>
                </li>
                ))}
            </ul>
            
        );
};

export default RandomUser;
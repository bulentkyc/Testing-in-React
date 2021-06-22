import { useState, useEffect } from "react";
/* eslint-disable import/no-anonymous-default-export */
export default (props) => {
    const [user, setUser] = useState(null);

    //fetch user data
    const fetchUserData = async (id) => {
        const response = await fetch( '/' + id );
        setUser(await response.json());
    }

    useEffect(() => {
        fetchUserData(props.id)
    }, [props.id]);

    if ( !user ) {
        return 'loading...';
    }

    return (
        <div>
            <h3>{user.name}</h3>
            <h4>{user.age}</h4>
            <h4>{user.address}</h4>
        </div>
    );
}
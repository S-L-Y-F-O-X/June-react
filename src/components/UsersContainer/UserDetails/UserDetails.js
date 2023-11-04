const UserDetails = ({userDetails}) => {
    const {id, name, username, emeil} = userDetails;


    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {emeil}</div>

        </div>
    );
};

export {UserDetails};
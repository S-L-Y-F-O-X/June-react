const User = ({user}) => {
    // console.log(props);
    let {name} = user;

    return (
        <div>
            <div>name: {name}</div>

        </div>
    );
};

export {User};
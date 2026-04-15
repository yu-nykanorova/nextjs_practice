type User = {
    id: number;
    name: string;
}

const UsersPage = async () => {

    const users: User[] = await fetch("http://localhost:3000/users/api")
        .then(res => res.json());
    console.log(users);

    return (
        <div>
            {
                users.map((user: User ) => (
                    <div key={user.id}>{user.name}</div>
                ))
            }
        </div>
    );
};

export default UsersPage;
import {getAllUsers} from "@/src/services/api.service";
import {UserComponent} from "@/src/components/users/UserComponent";

export const UsersComponent = async () => {

    const users = await getAllUsers();

    console.log(users);

    return (
        <ul className="p-4 grid grid-cols-2 gap-8">
            {
                users.map((user) => (
                    <UserComponent key={user.id} user={user}/>
                ))
            }
        </ul>
    );
};

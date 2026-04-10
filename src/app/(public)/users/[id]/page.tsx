import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: {id:string};
}

export const generateMetadata = async ({params}: Props):Promise<Metadata> => {
    let {id} = await params;

    return {
        title: `Users Page title ${id}`,
    }
}

const UserPage:FC<Props> = async ({params}) => {
    const {id} = await params;
    console.log(id);
    return (
        <div>
            User page content {id}
        </div>
    );
};

export default UserPage;

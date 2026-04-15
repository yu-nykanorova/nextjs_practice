export const GET = async (request: Request, response: Response) => {
    console.log("Get request route handler");

    const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json());

    console.log(request);
    console.log(response);

    response.headers.set("XXX", "xxxxxxxxxxxxxxxxxx");

    return Response.json(users);

    //return Response.json({message: request.url, status: 200});
}

export const POST = async () => {
    console.log("Post request route handler");
    return Response.json({message: "Post request route handler"});
}
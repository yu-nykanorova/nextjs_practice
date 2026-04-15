import {NextRequest} from "next/dist/server/web/spec-extension/request";
import {NextResponse} from "next/dist/server/web/spec-extension/response";

// функція прошарок
export const middleware = async (request: NextRequest) => {
    console.log("middleware");


//     const login = request.cookies.get("login");
//     const password = request.cookies.get("password");
//
//     const token = await fetch("", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify({
//             key1: login,
//             key2: password,
//         }),
//     }).then(res => res.json());

    const token = "sdfsdfsdddaergrwhtey";

    const response = NextResponse.next({
        headers: {
            Authorization: token
        }
    })

    return response;
}


// працює з усіма url
// щоб конкретизувати url, потрібно config

export const config = {
    matcher: "/auth", // якщо "/about/:path*", реагує на "/about/будь-що"
}

// Бібліотека Nemo
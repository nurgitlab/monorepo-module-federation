import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {Suspense} from "react";
import {About} from "@/pages/About";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/About',
                element: <Suspense fallback={'Loading...'}><About/></Suspense>
            }
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;
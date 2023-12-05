import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {Suspense} from "react";
import {Shop} from "@/pages/Shop";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}><Shop/></Suspense>
            }
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;

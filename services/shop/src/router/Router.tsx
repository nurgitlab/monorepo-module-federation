import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {Suspense} from "react";
import {Shop} from "@/pages/Shop";

const routes = [
    {
        path: "/shop",
        element: <App/>,
        children: [
            {
                path: '/shop/main',
                element: <Suspense fallback={'Loading...'}><Shop/></Suspense>
            },
            {
                path: '/shop/second',
                element: <Suspense fallback={'Loading...'}><div style={{color: 'green'}}>SBOL.Маркет.</div></Suspense>
            }
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;

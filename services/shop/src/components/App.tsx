import {Link, Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div className={"main"}>
            <h1>SHOP.TSX</h1>

            <Link to={'/shop'}>Shop</Link>
            <Outlet/>
        </div>
    )
}
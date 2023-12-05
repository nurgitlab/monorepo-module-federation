import {Link, Outlet} from "react-router-dom";
import {adminRoutes} from "@packages/shared/src/routes/admin"
import {shopRoutes} from "@packages/shared/src/routes/shop"

export const App = () => {
    return (
        <div className={"main"}>
            <h1>SHOP.TSX</h1>

            <Link to={shopRoutes.main}>Shop</Link>
            <br/>
            <Link to={shopRoutes.second}>Сбол</Link>
            <Outlet/>
        </div>
    )
}
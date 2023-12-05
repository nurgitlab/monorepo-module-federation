import {Link, Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div className={"main"}>
            <h1>APP.TSX</h1>

            <Link to={'/about'}>About</Link>
            <br/>
            <Link to={'/shop'}>Shop</Link>
            <Outlet/>
        </div>
    )
}
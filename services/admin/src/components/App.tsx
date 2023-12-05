import {Link, Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div className={"main"}>
            <h1>ADMIN.TSX</h1>

            <Link to={'/admin/about'}>About</Link>

            <Outlet/>
        </div>
    )
}
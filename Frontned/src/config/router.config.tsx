import {Routes,Route} from "react-router-dom"
import LandingPage from "../pages/landing/landing.page";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import Activate from "../pages/auth/Activate"
import UserDetailPage from "../pages/auth/About";
import ResetPasswordPage from "../pages/auth/Reset"
import Reactivate from "../pages/auth/Reactivate"
import HomerBannerComponent from "../../src/components/banner/home-banner.component"
import Stock from "../../src/pages/auth/Stock"
import WatchListPage from "../pages/auth/WatchList";
import Dashboard from "../pages/auth/Table"
const RoutingConfig=()=>{
    return (<>

<Routes>

<Route index  element={<LandingPage />}></Route>
<Route path ="*" element ={<>Error page</>}></Route>
<Route path ="login" element={<LoginPage/>}></Route>
<Route path ="register" element={<RegisterPage/>}></Route>
<Route path ="/activate" element={<Activate/>}></Route>
<Route path ="/:id/:name" element={<UserDetailPage/>}></Route>
<Route path ="/resetp" element={<Reactivate/>}></Route>
<Route path ="/home" element={<HomerBannerComponent/>}></Route>
<Route path ="/resetpassword" element={<ResetPasswordPage/>}></Route>
<Route path ="/stocks" element={<Stock/>}></Route>
<Route path ="/watchlist" element={<WatchListPage/>}></Route>
<Route path ="/table" element={<Dashboard/>}></Route>
</Routes>
    </>
    )}

 export default RoutingConfig
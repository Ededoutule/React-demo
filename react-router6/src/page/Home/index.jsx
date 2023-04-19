import {NavLink, Routes, Route, Outlet} from "react-router-dom";
import Message from "./Message";

export default function Home() {
   return (
       <div>
           <NavLink to="/home/message">Message</NavLink>

      {/*     <Routes>
               <Route path="message"  element={<Message />}></Route>
           </Routes>
*/}
           <Outlet />
       </div>
   )
}
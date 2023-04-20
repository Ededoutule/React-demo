
import './App.css';
import {NavLink, Routes, Route, Navigate, useRoutes, useNavigate} from "react-router-dom";
import Home from './page/Home'
import About from './page/About'
import router from './router'
import Message from "./page/Home/Message";

function App() {

    // 通过useRoutes生成路由表
    const routers = useRoutes(router)

    const navigate = useNavigate()

    const navLinkHandle = type => {
      return () => {
        type === 'back' ? navigate(-1) : 
          type === 'go' ? navigate(1) : 
            type === 'about' ? navigate(type) : ''
      }
    }





    return (
      <div className="App">

          <button onClick={navLinkHandle('go')}>前进</button>
          <button onClick={navLinkHandle('back')}>后退</button>
          <button onClick={navLinkHandle('about')}>到About</button>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          {/*          <Routes>

                 Route的Component改为element了，里面带的内容改为<Home />

                 router@6 重定向使用Navigate标签

             <Route path="/home/*" element={<Home />}>
             </Route>
             <Route path="/about/*" element={<About />}></Route>

             <Route path="/" element={<Navigate to="home" />}></Route>
          </Routes>*/}

          {/*
            注册路由表
          */}
          {routers}
      </div>
  );
}

export default App;

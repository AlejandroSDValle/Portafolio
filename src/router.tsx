import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects";
import ProjectUrl from "./views/ProjectUrl";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} index></Route>
                <Route path='/proyectos' element={<Projects />} index></Route>
                <Route path="/proyecto/:projectId" element={<ProjectUrl />} />
            </Routes>
        </BrowserRouter>
    )
}
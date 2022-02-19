import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../components/Header/Header';
import NotFound from "../pages/NotFound";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Header/>}/>
                {/*<Route exact path="/about" component={About}/>*/}
                {/*<Route exact path="/contact" component={Contact}/>*/}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>

    );
}
export default AppRouter;

import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import * as Pages from './pages/_index';

export default function App() {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route
                    path='/'
                    element={<Pages.Home/>}
                />
                <Route
                    path='/providers'
                    element={<Pages.Providers/>}
                />
            </Routes>
        </>
    );
}

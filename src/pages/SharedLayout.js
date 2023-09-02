import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <>
            <header><Navbar /></header>
            <div className='container'><Outlet /></div>
        </>
    );
};
export default SharedLayout;
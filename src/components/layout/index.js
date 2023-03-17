// Importing the 'Outlet' component from the 'react-router-dom' library, which is used to render nested routes
import {Outlet} from 'react-router-dom'
import Sidebar from '../sidebar';
import './index.scss'


const Layout = () => {
    return (
        <div className="App">
        <Sidebar />
        <div className='page'>
            <span className= 'tags top-tags'>&lt;body&gt;</span>

            <Outlet />

            <span className='tags bottom-tags'>
            &lt;body&gt;
            <br />
            <span className= 'tags bottom-html'>&lt;body&gt;</span>
            </span>
        </div>
        </div>
    )
}

export default Layout
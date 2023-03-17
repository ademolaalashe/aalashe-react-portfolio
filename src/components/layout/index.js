// Importing the 'Outlet' component from the 'react-router-dom' library, which is used to render nested routes
import {Outlet} from 'react-router-dom'
// Importing the 'Sidebar' component from the '../sidebar' file path
import Sidebar from '../sidebar';

// Importing the styles from the './index.scss' file path
import './index.scss'

// Defining a functional component named 'Layout'
const Layout = () => {

 // Returning the JSX elements that make up the Layout component
    return (
        <div className="App">
{/* Rendering the Sidebar component */}
        <Sidebar />
{/* Defining a div element with a class of 'page' */}
        <div className='page'>
{/* Adding an HTML tag to the page using the 'span' element */}
            <span className= 'tags top-tags'>&lt;body&gt;</span>
 {/* Rendering the nested routes using the 'Outlet' component */}
            <Outlet />
{/* Adding another HTML tag to the page using the 'span' element */}
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
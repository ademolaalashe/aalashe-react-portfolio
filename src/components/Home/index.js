import {Link} from 'react-router-dom';
// import LogoTitle from '../../assets/images/(add file here and uncomment)'
import './index.scss'

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm 
                <img src={LogoTitle} alt="developer" />
                Ademola Alashe
                <br />
                a Web Developer
                </h1>
                <h2>Frontend Developer</h2>
                <Link to= "/contact" className='flat-button'>CONTACT ME</Link>

            </div>

        </div>
    )
}

export default Home
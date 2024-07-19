import { Link } from 'react-router-dom';

const Header = () => (
    <>
        <header className="header">
            <div className="header-content d-flex justify-content-between">
                <i className="bi bi-person-lines-fill fs-1">Contact</i>
                <div className="header-links">
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/create' className='link'>Create</Link>
                </div>
            </div>
        </header>
       
        <main className="content">
            {/* Your main content goes here */}
        </main>
    </>
);

export default Header;

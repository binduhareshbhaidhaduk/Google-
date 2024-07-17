import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <header>
                <div className='p-4 m-0 text-white d-flex justify-content-between align-items-center'>
                    <i className="bi bi-person-lines-fill logo">Contact</i>
                    <div>
                        <Link to='/' className='p-3 text-white'>Home</Link>
                        <Link to='/create' className='p-3 text-white'>Create</Link>
                    </div>
                </div>
            </header>
            
            <div className="offcanvas">
                <ul>
                    <li><div>Contact</div></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/create'>Create</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>   
            </div>
         

            
        </>
    );
}

export default Sidebar;

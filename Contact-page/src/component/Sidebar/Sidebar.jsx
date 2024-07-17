import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
          
            
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

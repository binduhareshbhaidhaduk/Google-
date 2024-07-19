import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
          
            
          <div className="sidebar">
            <ul className="sidebar-list p-3">
                <li className="sidebar-item"><Link to='/'>Home</Link></li>
                <li className="sidebar-item"><Link to='/create'>Create</Link></li>
            </ul>
        </div>
         

            
        </>
    );
}

export default Sidebar;

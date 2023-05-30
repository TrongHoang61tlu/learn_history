import { FaSignOutAlt } from "react-icons/fa";
import { Logout, WrapperHeader } from "./styleAdmin";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function HeaderAdmin() {
    const dispatch = useDispatch()
    const redirectHome = useNavigate();
    const handleLogout = () => {
        dispatch(logout( () => redirectHome("/") ))
      }
    return (  
       <WrapperHeader>
            <Logout>
                <FaSignOutAlt onClick={handleLogout}/>
            </Logout>
       </WrapperHeader>
    );
}

export default HeaderAdmin;
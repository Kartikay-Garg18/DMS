import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { logout as authLogout } from "../../services/auth";

const Header = () => {
    const [menuState, setMenuState] = useState(false)
    const authStatus = useSelector((state) => state.auth.status);
    const dispatch = useDispatch();
    const navigation = [
        { title: "Browse Fundraisers", path: "/events" },
        { title: "Start a Fundraiser", path: "/new-campaign" }
    ]
    return (
        <div>
            <div className="flex justify-between items-center px-10">
                <div className="flex w-[13vw]">
                    <Link to="/" className="text-2xl font-bold text-gray-800 m-auto">
                        <img
                            src="../images/logo.png" 
                            width={70}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="hidden lg:flex space-x-10 items-center justify-center">
                    {
                        navigation.map((item, idx) => (
                            <Link key={idx} to={item.path} className="z-90 text-gray-900 relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-1000 after:origin-left no-underline">{item.title}</Link>
                        ))
                    }
                    {
                        authStatus? (
                            <Link to="/profile" className="text-gray-900 hover:text-gray-800 w-10 h-10"><img
                            src="https://img.icons8.com/?size=100&id=teAmm8wzAnK7&format=png&color=000000"
                            className="w-full h-full rounded-full object-fill"
                            
                        /></Link>
                        ) : (
                            <Link to="/login" className="text-gray-900 px-4 py-2 rounded-full border no-underline">Login/Register</Link>
                        )
                    }
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setMenuState(!menuState)} className="outline-none">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`lg:hidden ${menuState ? '' : 'hidden'}`}>
                <div className="flex flex-col space-y-4">
                    {
                        navigation.map((item, idx) => (
                            <Link key={idx} to={item.path} className="text-gray-900 hover:text-gray-800 no-underline">{item.title}</Link>
                        ))
                    } 
                    {
                        authStatus? (
                            <Link to="/profile" className="text-gray-900 hover:text-gray-800 pb-2 no-underline">My Profile</Link>
                        ) : (
                            <Link to="/login" className="text-gray-900 hover:text-gray-800 pb-2 no-underline">Login/Register</Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
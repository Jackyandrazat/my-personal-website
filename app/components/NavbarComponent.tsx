import { Link } from "react-router";
import { supabase } from "../lib/superbaseClient";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";

const Navbar = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user);
        });

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null);
            }
        );

        return () => authListener?.subscription?.unsubscribe();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null); // Pastikan state user di-reset setelah logout
    };

    return (
        <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <a>Detailed</a>
                            <ul className="p-2">
                                <li><Link to="#about">About</Link></li>
                                <li><Link to="#contact">Contact</Link></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Personal Web</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <details>
                            <summary>Detailed</summary>
                            <ul className="p-2">
                                <li><Link to="#about">About</Link></li>
                                <li><Link to="#contact">Contact</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <button className="btn btn-error" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <Link className="btn btn-primary" to="/auth">Login</Link>
                )}
            </div>
        </div>
    );

};

export default Navbar;

import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg"

const Header = () => {

    const [links] = useState(["Features", "Team", "Signin"])
    const headerRef = useRef()


    useEffect(() => {
        window.addEventListener("scroll" , () =>{
            if(window.scrollY > 50){
                headerRef.current.style.background = "#0c1524"
            }else{
                headerRef.current.style.background = "transparent"
            }
        })
    }, [])

    
    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 transition-all duration-200">
            <div className="flex justify-between items-center container m-auto py-[25px]">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
                <nav>
                    <ul className="flex gap-[50px] items-center">
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <a href={`/${link.toLowerCase()}`} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200">{link}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;
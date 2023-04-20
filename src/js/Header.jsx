import logo from "../images/react-logo.png"
import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

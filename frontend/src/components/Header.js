import React from 'react'
import {Link} from 'react-router-dom'
import { getLanguage, setLanguage } from '../vars'

export default function Header() {
    if (getLanguage() === "en-US"){
        return (
            <header>
                <Link to={"/uk-UA"}>
                    <h2>
                        qwerty
                    </h2>
                </Link>
            </header>
        )
    }
    return (
        <header>
            <Link to={"/en-US"}>
                <h2>
                    qwerty
                </h2>
            </Link>
        </header>
    )
}

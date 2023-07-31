import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>
                {navigator.language}
            </h1>
        </header>
    )
}

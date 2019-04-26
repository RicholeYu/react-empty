import React from 'react'
import { Link } from 'react-router-dom'
export default class App extends React.Component {
    public render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">index</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/play">play</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

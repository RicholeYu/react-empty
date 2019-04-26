import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import AsyncComponent from './common/AsyncComponent'
const Index = () => import('./pages/Index')
const About = () => import('./pages/About')
const Play = () => import('./pages/Play')
import Header from './pages/Header'
export default class AppRouter extends React.Component {
    public render () {
        return (
            <Router>
                <Header />
                <div>
                    <Route path="/" exact component={Index} />
                    <Route path="/about" component={About} />
                    <Route path="/play" component={Play} />
                </div>
            </Router>
        )
    }
}

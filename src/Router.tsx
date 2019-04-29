import React from 'react'
import {
    BrowserRouter as Router, Route
} from 'react-router-dom'
import AsyncComponent from '@/common/AsyncComponent'
import Header from './pages/Header'
import user from './store/user'
export default class AppRouter extends React.Component {
    public render () {
        return (
            <Router>
                <Header />
                <div>
                    <Route path="/" exact component={AsyncComponent(() => import('./pages/Index'), { user })} />
                    <Route path="/about" component={AsyncComponent(() => import('./pages/About'))} />
                    <Route path="/play" component={AsyncComponent(() => import('./pages/Play'))} />
                </div>
            </Router>
        )
    }
}

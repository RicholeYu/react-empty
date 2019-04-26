import React from 'react'

interface state {
    Component: any,
    load: Boolean
}

export default class AsyncComponent extends React.Component<any, state> {
    public state = {
        load: false,
        Component: React.Component
    }

    componentDidMount () {
        this.props.importComponent()
            .then((module: any) => this.setState({
                load: true,
                Component: module.default
            }))
    }

    render () {
        const { Component, load } = this.state
        return load ? <Component {...this.props} /> : null
    }
}

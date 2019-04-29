import React from 'react'

interface EsModule {
    default: any
}

interface State {
    Component: React.ComponentClass | null
}

export default function asyncComponent (importComponet: Function, props = {}):React.ComponentClass {
    return class AsyncComponent extends React.Component<{}, State> {
        state = {
            Component: null
        }
        componentWillMount () {
            importComponet()
                .then((module: EsModule) => module.default)
                .then((Component: React.ComponentClass) => {
                    this.setState({
                        Component
                    })
                })
        }

        render () {
            const { Component } = this.state
            return Component ? <Component {...props} /> : <div />
        }
    }
}

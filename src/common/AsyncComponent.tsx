import React from 'react'

interface EsModule {
    default: any
}

interface State {
    Component: React.ComponentClass,
    load: Boolean
}

export default function asyncComponent (importComponet: Function):React.ComponentClass {
    return class AsyncComponent extends React.Component<{}, State> {
        state = {
            Component: React.Component,
            load: false
        }

        componentWillMount () {
            importComponet()
                .then((module: EsModule) => module.default)
                .then((Component: React.ComponentClass) => {
                    this.setState({
                        Component,
                        load: true
                    })
                })
        }

        render () {
            const {
                Component, load
            } = this.state
            return load ? <Component /> : <div />
        }
    }
}

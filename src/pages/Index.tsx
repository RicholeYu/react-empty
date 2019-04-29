import React from 'react'
// eslint-disable-next-line no-unused-vars
import { user } from '../store/user'
import { observer } from 'mobx-react'
interface props {
    handlerClick?: Function,
    user: user
}
@observer class Index extends React.Component<props> {
    handlerClick = () => {
        this.props.user.setAge(this.props.user.age + 1)
    }
    render () {
        return (
            <a href="javascript:;" onClick={this.handlerClick}>Index Pages, {this.props.user.age}</a>
        )
    }
}

export default Index

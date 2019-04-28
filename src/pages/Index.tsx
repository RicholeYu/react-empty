import React from 'react'
import { connect } from 'react-redux'

interface props {
    age?: number,
    addAge?: Function,
    handlerClick?: Function
}

const mapStateToProps = ({ user }: object, props):props => {
    console.log(user, props)
    return {
        age: user.age
    }
}

const mapDispatchToProps = (dispatch, props):props => {
    console.log(dispatch, props)
    return {
        addAge: (age: Number) => {
            console.log(age)
            dispatch({
                type: 'setAge',
                age
            })
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class Index extends React.Component<props> {
    handlerClick = () => {
        this.props.addAge(this.props.age + 1)
    }
    render () {
        return (
            <div onClick={this.handlerClick}>Index Pages, {this.props.age}</div>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Index)


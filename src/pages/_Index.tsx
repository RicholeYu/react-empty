import React from 'react'
import { connect } from 'react-redux'

interface props {
    age?: number,
    addAge?: Function,
    handlerClick?: Function
}

interface action {
    type: string,
    age: number
}

let mapStateToProps = (state:any):props => ({
    age: state.user.age
})

let mapDispatchToProps = (dispatch: React.Dispatch<action>):props => {
    return {
        addAge: (age: number) => {
            dispatch({
                type: 'setAge',
                age
            })
        }
    }
}
// @connect(mapStateToProps, mapDispatchToProps)
class Index extends React.Component<props> {
    handlerClick = () => {
        this.props.addAge(this.props.age + 1)
    }

    render () {
        return (
            <div onClick={this.handlerClick}>Index Pages, {this.props.age}</div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)

// export default Index

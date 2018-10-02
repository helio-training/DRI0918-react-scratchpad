import React, { Fragment } from 'react'

class LogExample extends React.Component {

    render() {
        this.props.myFunc('This is from inside LogExample')
        return (
            <div>
                Hello World
            </div>
        )
    }
}

export default LogExample
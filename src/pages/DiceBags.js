import React, { Component, Fragment } from 'react'
import DiceBag from '../dice-bag/DiceBag'

export default class extends Component {
    render() {
        return (
            <Fragment>
                <DiceBag/>
                <DiceBag/>
                <DiceBag/>
            </Fragment>
            
        )
    }
}
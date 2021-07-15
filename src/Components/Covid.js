import axios from 'axios'
import React, { Component } from 'react'

export default class Covid extends Component {
    state = {
        covid: []
    }

    componentDidMount() {
        axios.get(`https://api.covidtracking.com/v1/states/current.json`)
            .then(res => {
                console.log(res)
                // this.setState({ persons: res.data })
            })
    }

    render() {
        return (
            <div>
                
                {/* <ul>
                    { this.state.covid.map(date => <li>{date}</li>)}
                </ul> */}
            </div>
        )
    }
}

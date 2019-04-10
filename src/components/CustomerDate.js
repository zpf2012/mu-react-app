import React from 'react'

class CustomerDate extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    GetCurrDate(){
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.GetCurrDate(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }


    render() {
        return(
            <React.Fragment>
                <h4 className='float-top'>现在时间是： {this.state.date.toLocaleString()}</h4>
            </React.Fragment>
        )
    }
}

export default CustomerDate;
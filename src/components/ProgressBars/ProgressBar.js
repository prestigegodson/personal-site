import React, {Component} from 'react'
import Transition from 'react-transition-group/Transition'

class ProgressBar extends Component{

    state = {
        percentage: 0
    }

    componentDidMount(){
        requestAnimationFrame(() => {
            this.setState({percentage: this.props.percentage})
        })
        
    }

    render(){

        const defaultStyle = {
            transition: `width 3s`,
            width: 0,
        }
        
        const transitionStyles = {
            entering: { width: `0` },
            entered:  { width: `${this.state.percentage}%` },
            exiting:  { width: '0' },
            exited:  { width: '0' },
        };

        return (<Transition in={true} timeout={2000}>
            {state => (
                <div className="progress-bar progress-bar-primary aos-init aos-animate" 
                    style={{...defaultStyle, ...transitionStyles[state]}}>
                </div>
            )}
        </Transition>);
    }
}

export default ProgressBar;
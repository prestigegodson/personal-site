import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'

class ProgressBar extends Component {

    constructor(){
        super()
        this.progressBarRef = React.createRef()
    }

    state = {
        percentage: 0,
        hasAnimationRan: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    }

    onScroll = () => {

        if(this.state.hasAnimationRan){
            window.removeEventListener('scroll', this.onScroll)
            return
        }

        let elemTop = this.progressBarRef.current.getBoundingClientRect().top;
        let elemBottom = this.progressBarRef.current.getBoundingClientRect().bottom;
        
        if(elemTop < window.innerHeight && elemBottom >= 0){
            this.setState({ percentage: this.props.percentage, hasAnimationRan: true })
        }
        
    }

    render() {

        const defaultStyle = {
            transition: `width 3s`,
            width: 0,
        }

        const transitionStyles = {
            entering: { width: `0` },
            entered: { width: `${this.state.percentage}%` },
            exiting: { width: '0' },
            exited: { width: '0' },
        };

        return (
            <Transition in={true} timeout={2000}>
                {state => (
                    <div ref={this.progressBarRef} className="progress-bar progress-bar-primary aos-init aos-animate"
                        style={{ ...defaultStyle, ...transitionStyles[state] }}>
                    </div>
                )}
            </Transition>

        );
    }
}

export default ProgressBar;
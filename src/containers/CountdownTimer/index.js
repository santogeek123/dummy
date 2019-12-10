import React from "react";
import { connect } from 'react-redux';
import Timer from "../../components/Timer";
import {TIMER_INIT} from "../../core/config/constants";
import { updateTimerData } from "../../core/actions/rootActions";

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: {} };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        // console.log(this.props.questionnaireData.timerData)
        this.setState({ seconds: this.props.questionnaireData.timerData ? this.props.questionnaireData.timerData : TIMER_INIT }, () => {
            this.startTimer();
        });


    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.questionnaireData) {
            //  console.log(nextProps.questionnaireData.timerData)
            this.setState({ timerData: nextProps.questionnaireData.timerData });
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }
    timehandler = (seconds) => {
        this.props.setTimerData(seconds);
    }
    timeoutCallback = () => {
        alert("Test Completed")
    }
    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        let convertedTime = this.secondsToTime(seconds);
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });


        this.timehandler(seconds)
        // Check if we're at zero.
        if (seconds === 0) {
            this.timeoutCallback();
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <Timer time={this.state.time} foreground = {this.props.foreground}/>
           
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        questionnaireData: state.questionnaire,
    }
}
const mapDispatchToProps = dispatch => {
    return {

        setTimerData(data) {
            dispatch(updateTimerData(data));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);

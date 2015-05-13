var React = require('react/addons'),
    Moment = require('moment'),
    Configuration = require('configuration.js').reactClock;

module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            twelveHoursClock: Configuration.twelveHoursClock ?
                Configuration.twelveHoursClock : false
        };
    },
    getCurrentTime: function () {
        var timeFormat = this.props.twelveHoursClock ? 'hh:mm A': 'hh:mm';

        this.setState({
            currentTime: Moment().format(timeFormat)
        });
    },
    componentWillMount: function () {
        this.getCurrentTime();
    },
    componentDidMount: function () {
        this.setState({
            clockInterval: setInterval(this.getCurrentTime, 1000)
        });
    },
    componentWillUnmount: function () {
        clearInterval(this.state.clockInterval);
    },
    render: function () {
        return (
            <div className="react-clock">
                <p className="current-time">
                    {this.state.currentTime}
                </p>
            </div>
        );
    }
});

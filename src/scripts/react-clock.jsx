var React = require('react/addons'),
    Configuration = require('../configuration.js').reactClock;

module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            twelveHoursClock: Configuration.twelveHoursClock ?
                Configuration.twelveHoursClock : false,
            showAMPM: Configuration.showAMPM ?
                Configuration.showAMPM : false
        };
    },
    getCurrentTime: function () {
        var date = new Date,
            currentHour = date.getHours();

        //Format hour correctly if needed
        var hour = this.props.twelveHoursClock && currentHour > 12 ?
        currentHour % 12 : currentHour;

        //Update hour to 12 if it is set to 0 in 12-hour format
        this.setState({
            currentHour: this.props.twelveHoursClock && hour === 0 ?
                12 : hour,
            currentMinutes: (date.getMinutes() < 10 ? '0' : '') +
                date.getMinutes(),
            currentAMPM: (this.props.showAMPM && this.props.twelveHoursClock) ?
                (currentHour < 12) ? ' AM' : ' PM'
                : ''
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
            <div className="unlock-screen-clock">
                <p className="current-time">
                    {this.state.currentHour}:{this.state.currentMinutes}
                    {this.state.currentAMPM}
                </p>
            </div>
        );
    }
});

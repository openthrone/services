import { Circle } from "rc-progress";
import React, { Component } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
class Circle3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
        };
        this.increase = this.increase.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentDidMount() {
        this.increase();
    }

    increase() {
        const { percent } = this.state;
        const newPercent = percent + 1;
        if (newPercent >= 61) {
            clearTimeout(this.tm);
            return;
        }
        this.setState({ percent: newPercent });
        this.tm = setTimeout(this.increase, 10);
    }

    restart() {
        clearTimeout(this.tm);
        this.setState({ percent: 0 }, () => {
            this.increase();
        });
    }

    render() {
        const { percent } = this.state;
        return (
            <ReactVisibilitySensor>
                {({ isVisible }) => (
                    <Circle
                        className="chart progressBar"
                        strokeLinecap="square"
                        strokeColor="#1baaa0"
                        strokeWidth={8}
                        percent={isVisible ? percent : ""}
                    ></Circle>
                )}
            </ReactVisibilitySensor>
        );
    }
}

export default Circle3;

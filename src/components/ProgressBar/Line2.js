import { Line } from "rc-progress";
import * as React from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

class Line2 extends React.Component {
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
        if (newPercent >= 80) {
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
                    <Line
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeColor="#1baaa0"
                        percent={isVisible ? percent : ""}
                    />
                )}
            </ReactVisibilitySensor>
        );
    }
}

export default Line2;

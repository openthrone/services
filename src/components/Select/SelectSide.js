import React, { Component } from "react";
import Select from "react-select";

const options = [
    { value: "Select Subject", label: "Select Subject" },
    { value: "Select Subject", label: "Select Subject" },
    { value: "Select Subject", label: "Select Subject" },
];
class SelectSide extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                className="nice-select"
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}

export default SelectSide;

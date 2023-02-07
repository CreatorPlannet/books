import React, { Fragment } from 'react'

class SearchDick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueTerm: ''
        }
    }

    onUpdateSearchInput = (e) => {
        const valueTermEvent = e.target.value;
        this.setState({ valueTerm: valueTermEvent })
        this.props.onUpdateSearch(valueTermEvent)
    }

    render() {
        return (
            <Fragment>
                <input
                    type='text'
                    placeholder='найти челоа'
                    value={this.state.valueTerm}
                    onChange={this.onUpdateSearchInput}
                />
            </Fragment>
        )
    }
}

export default SearchDick
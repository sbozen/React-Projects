import React from 'react';

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Img Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} ></input>
                        {/*value..toUpperCase() dersek sadece büyük harf yazabiliriz
                         onchange={this.onInputChange} */}
                        <label><sub>Press enter after typing</sub></label>

                    </div>

                </form>
            </div >
        );
    }
}

export default SearchBar;
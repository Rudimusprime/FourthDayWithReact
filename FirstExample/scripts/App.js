// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
// const NegativeMessage = () => <p>Nie możesz obejrzeć filmów, ponieważ masz mniej niż 16 lat!</p>;
const ValidationMessage = (props) => {
    const {txt} = props;
    return (
        <p>{txt}</p>
    )
}


class TicketShop extends React.Component {

    state = {
        isConfirmed: false,
    }

    handleCheckBoxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false,
        })
    }

    displayMessage = (isConfirmed, isFormSubmitted) => {
        if (isFormSubmitted) {
            if (isConfirmed) {
                return <ValidationMessage txt="Miłego seansu"/>
            } else {
                return <ValidationMessage
                    txt="Nie masz ukończonego minimalnego wymaganego wieku aby obejrzeć ten film"/>
            }
        } else {
            return null
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        if (!this.state.isFormSubmitted)
            this.setState({
                isFormSubmitted: true,
            })
    }

    render() {
        const {isConfirmed, isFormSubmitted} = this.state;
        console.log(isConfirmed);
        return (
            <>
                <h1>Kup bilet na horror roku!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" id="age"
                           onChange={this.handleCheckBoxChange}
                           checked={isConfirmed}/>
                    <label htmlFor="age">Mam co najmniej 16 lat</label>
                    <br/>
                    <button type="submit">Kup bilet</button>
                </form>
                {this.displayMessage(this.state.isConfirmed, this.state.isFormSubmitted)}
            </>
        )
    }
}

ReactDOM.render(<TicketShop/>, document.getElementById("root"));
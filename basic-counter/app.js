class App extends React.Component {
  constructor (props) {
    this.state = {
      count: 0
    }
  }

  onClick () {
    this.State({
      count: this.state.count + 1
    });
  }


  render() {
    return (
        <h1>Counter: </h1>

    )
  }
}

App.render(<App />, document.getElementById('app-container'));

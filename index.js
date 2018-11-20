class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter : 0};

    // This binding is necessary to make `this` work in the callback
    this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  }
  
  

  render() {
    return (
      <div>
        <button onClick={this.increment}>
            Increment Value
        </button>
        <button onClick={this.decrement}>
            Decrement Value
        </button>
        <br/>
        <br/>
        <br/>
        Counter :  {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
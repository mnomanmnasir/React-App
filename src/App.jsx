// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           HELLO WORLD
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { Home, Service } from './components/Home'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Noman',
      email: 'nomanmnasir@gmail.com',
      value: ''
    }
  }

  // set_name = () => {
  //   console.log(this.state.name)
  // }

  // handleChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  get_props = (props) => {
    console.log(props)
  }


  render() {
    return (
      <div>
        <Home get_props ={this.get_props} />
        <Service />
        {/* <h1>
            App Component</h1>
          <h2>My name is : {this.state.name}</h2>
          <input type="text" name='name' value={this.state.name} onChange={(e) => this.handleChange(e)} />
          <button onClick={this.set_name}>Set Name</button> */}

      </div>
    )
  }
}

export default App;
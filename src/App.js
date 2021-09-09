import logo from './logo';


import React from 'react';
import { NotionRenderer } from "react-notion";

// import "react-notion/src/styles.css";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blockMap: {}
    }
  }

  async componentDidMount() {
    const blogData = await fetch(
      "https://notion-api.splitbee.io/v1/page/529749e0c335458ab954403994288952"
    ).then(res => res.json());

    this.setState({ blockMap: blogData })
  }

  render() {
    return (
      <div>
      <ul class="side-nav">
        <li><img src={logo}/></li>
        <li><a href="tel:617-999-3094">617-999-3094</a></li>
        <li><a href="mailto:dwilnerlawrence@gmail.com"><svg viewBox="0 0 28 20" fill="none"><rect x="1" y="1" width="25.7193" height="18" rx="4" stroke="#000" stroke-width="2"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M2.07324 1L2.91848 2L12.3777 13.1912L13.6841 14.7368L15.0117 13.2093L24.7531 2L25.6221 1H2.07324ZM22.1034 2L13.7052 11.6636L5.53721 2H22.1034Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3358 18L16.2722 11.7621L17.5602 10.1754L23.9118 18L24.7235 19H2.64526L3.45703 18L9.80864 10.1754L11.0966 11.7621L6.03303 18H21.3358Z" fill="#000"></path></svg></a></li>
      </ul>
        <NotionRenderer fullPage blockMap={this.state.blockMap} />
      </div>
    )
  }
}

export default App;
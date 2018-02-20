import React, { Component } from 'react';
import Title from '../components/Title';
import TopTenBox from '../components/TopTenBox';

class MusicBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      top20: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      const dataArray = data.feed.entry
      this.setState({ top20: dataArray})
    })
    request.send();

  }

  render(){
    console.log("this state", this.state.top20);
    console.log("this first", this.state.top20[0]);
    return (
      <div>
        <Title/>
        <TopTenBox allSongs={this.state.top20}/>
      </div>
    )
  }

}

export default MusicBox;

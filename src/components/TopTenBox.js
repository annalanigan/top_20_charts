import React, { Component } from 'react';
import Songs from './Songs'

class TopTenBox extends Component {

  render(){
    const songList = this.props.allSongs.map((song, index) => {
      console.log("logo", song['im:image'][2].label);
      return(
        <Songs key={index} position={index+1} artist={song['im:name'].label} title={song['im:artist'].label} logo={song['im:image'][2].label}>
        </Songs>
      )
    }
  )



  return (
    <table>
      <thead>
        {songList}
      </thead>
    </table>
  )

}
}

export default TopTenBox;

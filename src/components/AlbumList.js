import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  state = {
    albums: []
  }
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      this.setState({ albums: response.data })
    })
    .catch(err => console.log('fail', err))
  }
  // renderAlbums() {
  //   return this.state.albums.map((album) => {
  //     return <Text>{ album.title }</Text>
  //   })
  // }
  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={ album.title } album={ album }/>)
  }
  render() {
    console.log(this)
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    )
  }
}


export default AlbumList
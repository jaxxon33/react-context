import React, { Component } from 'react'

export default class Lyrics extends Component {
	state = {
		track: {},
		lyrics:{}
	}

	componentDidMount() {
		fetch(
			`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
		)
			.then(res => res.json())
			.then(res => {
				//this.setState({ track_list: res.message.body.track_list })
				console.log(res)
				//console.log(process.env.REACT_APP_MM_KEY)
				//console.log(this.props.match.params.id)
			})
			.catch(err => console.log(err))
	}
	render() {
	return (
	  <div>
		<h1>Lyrics</h1>
	  </div>
	)
  }
}

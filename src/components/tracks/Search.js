import React, { Component } from 'react'
import { Consumer } from '../../context'

export default class Search extends Component {
	state = {
		trackTitle: ''
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	formTrack = (dispatch, e) => {
		e.preventDefault()
		fetch(
			`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
		)
			.then(res => res.json())
			.then(res => {
				dispatch({
					type: 'SEARCH_TRACKS',
					payload: res.message.body.track_list
				})		
				this.setState({trackTitle: ''})		
				// console.log(res.message.body.track_list)
			})
			.catch(err => console.log(err))

	}

	render() {
		return (
			<Consumer>
				{value => {
					// console.log(value)
					const { dispatch } = value
					return (
						<div className="card card-body mb-4 p-4">
							<h1 className="displey-4 text-center">
								<i className="fas fa-music"></i>
								Search for A song</h1>
							<p className="lead text-center">Get the lyrics for any song</p>
							<form onSubmit={this.formTrack.bind(this, dispatch)}>
								<div className="form-group">
									<input type="text"
										className="form-control form-control-lg"
										placeholder="Song title"
										name="trackTitle"
										value={this.state.trackTitle}
										onChange={this.onChange}
									/>

								</div>
								<button className="btn btn-primary btn_lg btn-block mb-5" type="submit">
									Get Track lyrics</button>
							</form>
						</div>
					)
				}}
			</Consumer>
		)
	}
}

import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingUrl: '',
      audio: null,
      playing: false
    }
  }
  playAudio(previewUrl) {
    const { playingUrl, playing } = this.state;
    let audio = new Audio(previewUrl);
    if (!playing) {
      audio.play();
      this.setState({
        playing: true,
        audio,
        playingUrl: previewUrl
      })
    } else {
      if (playingUrl === previewUrl) {
        // audio.pause();
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          playingUrl: previewUrl,
          audio
        })
      }

    }
  }

  render() {
    const { tracks } = this.props;
    return (
      <div className="gallery">
        {tracks.map((track, k) => {
          const trackImg = track.album.images[0].url;
          return (
            <div className="track" key={k} onClick={() => this.playAudio(track.preview_url)}>
              <img src={trackImg} className="track-img" alt="track" />
              <div className="track-play">
                <div className="track-play-inner">
                  { this.state.playingUrl === track.preview_url ? <span>| |</span> : <span>&#9654;</span>}
                </div>
              </div>
              <p className="track-text">{track.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gallery

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Play from '../assets/images/play-rounded.svg'
import PlayIcon from '../assets/images/play.svg'
import Pause from '../assets/images/pause.svg'
import SoundOn from '../assets/images/sound-on.svg'
import SoundOff from '../assets/images/sound-off.svg'
import Close from '../assets/images/close.svg'
import { formatVideoCurrentTime, formatVideoDuration } from '../utils/helpers'
import styled from 'styled-components'

export const VideoSection = ({ previewVideo, fullVideo, mobileImg }) => {
  const [showControls, setShowControls] = useState(false)
  const [hasSetControls, setHasSetControls] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [mouseMoving, setMouseMoving] = useState(null)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const [volume, setVolume] = useState('50')
  const [currentTime, setCurrentTime] = useState('')
  const [duration, setDuration] = useState('')

  const refVideoContainer = useRef(null)
  const refVideo = useRef(null)
  const refVideoControls = useRef(null)
  const refVideoShowControls = useRef(null)
  const refProgressBar = useRef(null)
  const fixRatio = useRef(null)
  const timeout = useRef(null)

  const initialMouseMove = () => {
    setMouseMoving(true)
    ;(() => {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        setMouseMoving(false)
      }, 2500)
    })()
  }

  const setMouseMove = () => {
    if (!hasSetControls) {
      setMouseMoving(true)
      ;(() => {
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
          setMouseMoving(false)
        }, 2500)
      })()
    }
  }

  const displayControls = () => {
    initialMouseMove()
    setHasSetControls(false)
    refVideo.current.pause()
    refVideo.current
      .getElementsByTagName('source')[0]
      .setAttribute('src', fullVideo)
    refVideo.current.load()
    refVideo.current.play()
    fixRatio.current = true
    setTimeout(() => {
      setShowControls(true)
      setIsMuted(false)
    }, 350)
  }

  const hideControls = () => {
    clearTimeout(timeout.current)
    fixRatio.current = false
    refVideo.current.pause()
    refVideo.current
      .getElementsByTagName('source')[0]
      .setAttribute('src', previewVideo)
    refVideo.current.load()
    refVideo.current.play()
    setMouseMoving(false)
    setShowControls(false)
    setTimeout(() => {
      setHasSetControls(true)
      setIsMuted(true)
      setIsPlaying(true)
      refVideo && refVideo.current.play()
    }, 350)
  }

  const playVideo = useCallback(() => {
    refVideo && refVideo.current.play()
    setIsPlaying(true)
  }, [])

  const pauseVideo = useCallback(() => {
    refVideo && refVideo.current.pause()
    setIsPlaying(false)
  }, [])

  useEffect(() => {
    if (refVideo.current) {
      refVideo.current.addEventListener('loadedmetadata', () => {
        //progress.setAttribute('max', video.duration)
        setDuration(refVideo.current.duration)
      })

      refVideo.current.addEventListener('timeupdate', () => {
        if (refVideo.current && refVideo.current.currentTime) {
          setCurrentTime(refVideo.current.currentTime)
        }
      })
    }

    if (refProgressBar.current) {
      refProgressBar.current.addEventListener('click', function (e) {
        const pos =
          (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) /
          this.offsetWidth
        refVideo.current.currentTime = pos * refVideo.current.duration
        setCurrentTime(pos * refVideo.current.duration)
      })
    }
  }, [])

  useEffect(() => {
    if (refVideo.current && showControls) {
      refVideo.current.volume = volume / 100
      if (volume === '0') {
        setIsMuted(true)
      } else {
        setIsMuted(false)
      }
    }
  }, [volume])

  return (
    <StyledVideoSection
      showControls={showControls}
      hasSetControls={hasSetControls}
      mouseMoving={mouseMoving}
      isHomePage={fixRatio.current}
      mobileImg={mobileImg}
    >
      <figure
        id="videoContainer"
        data-fullscreen="false"
        ref={refVideoContainer}
        onMouseMove={setMouseMove}
        role="presentation"
      >
        <video
          id="video"
          autoPlay
          playsInline
          muted={isMuted}
          loop
          ref={refVideo}
        >
          <source src={previewVideo} type="video/mp4"></source>
        </video>

        {!showControls && (
          <div
            className="full-video-link"
            id="video-show-controls"
            ref={refVideoShowControls}
          >
            <PlayIcon onMouseUp={displayControls} />{' '}
            <span onMouseUp={displayControls}>ver vídeo completo</span>
          </div>
        )}

        <div id="video-controls" className="controls" ref={refVideoControls}>
          <div
            id="progress-container"
            className="progress"
            ref={refProgressBar}
          >
            <progress id="progress" value={currentTime} min="0" max={duration}>
              <span
                id="progress-bar"
                style={{
                  width:
                    Math.floor(((currentTime || 0) / (duration || 0)) * 100) +
                    '%',
                }}
              ></span>
            </progress>
          </div>
          <button id="playpause" type="button">
            {isPlaying ? (
              <Pause className="icon" onClick={pauseVideo} />
            ) : (
              <Play className="icon" onClick={playVideo} />
            )}
          </button>
          <div
            id="volume"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)}
          >
            <button id="mute" type="button" data-state="mute">
              {isMuted ? (
                <SoundOff
                  className="icon active"
                  onClick={() => setIsMuted(false)}
                />
              ) : (
                <SoundOn className="icon" onClick={() => setIsMuted(true)} />
              )}
            </button>
            {showVolumeSlider && (
              <input
                id="vol-control"
                type="range"
                min="0"
                max="100"
                step="1"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
            )}
          </div>
          <div id="duration">
            <span>{formatVideoCurrentTime(currentTime)}</span>
            <span>&nbsp;/&nbsp;</span>
            <span>{formatVideoDuration(duration)}</span>
          </div>
          <button
            id="close"
            type="button"
            data-state="close"
            onClick={hideControls}
            aria-label="Close"
          >
            <Close className="icon" />
          </button>
        </div>
      </figure>
    </StyledVideoSection>
  )
}

const StyledVideoSection = styled.div`
  position: relative;
  max-height: 100vh;
  max-width: 100vw;
  background-color: #000000;
  height: 100vh;
  width: 100vw;

  #videoContainer {
    background-color: black;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  video {
    object-fit: cover;
    background-color: black;
    height: 100%;
    pointer-events: none;
  }

  .icon {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.lightText};
    &:hover {
      fill: ${({ theme }) => theme.lightTitle};
    }
  }
  .icon.active {
    fill: ${({ theme }) => theme.lightTitle};
  }
  #volume {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'mute line';
    height: 16px;
    margin-right: 10px;
  }
  #mute {
    grid-area: mute;
    margin-right: 0px;
  }
  /* Volume button */
  #vol-control {
    display: none;
    width: 60px;
    margin-left: 5px;
    grid-area: line;
  }
  #vol-control::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid transparent;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.lightText};
    cursor: pointer;
    transform: translateY(-40%);
  }
  #vol-control::-moz-range-thumb {
    border: 1px solid transparent;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.lightText};
    cursor: pointer;
  }
  #vol-control::-ms-thumb {
    border: 1px solid transparent;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.lightText};
    cursor: pointer;
  }
  /* Volume slider */
  #vol-control::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: ${({ theme }) => theme.lightText};
  }
  #vol-control:focus::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.lightText};
  }
  #vol-control::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: ${({ theme }) => theme.lightText};
  }
  #vol-control::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: transparent;
    color: transparent;
  }
  #vol-control::-ms-fill-lower {
    background: ${({ theme }) => theme.lightText};
  }
  #vol-control:focus::-ms-fill-lower {
    background: ${({ theme }) => theme.lightText};
  }
  #vol-control::-ms-fill-upper {
    background: ${({ theme }) => theme.lightText};
  }
  #vol-control:focus::-ms-fill-upper {
    background: ${({ theme }) => theme.lightText};
  }

  /* Fix for the controls to stay in the right place */
  .progress {
    grid-area: progress;
  }
  #playpause {
    grid-area: playpause;
  }
  #mute {
    grid-area: mute;
  }
  #close {
    grid-area: close;
  }

  .controls {
    position: absolute;
    bottom: 0;
    overflow: hidden;
    background: transparent;
    width: 90%;
    margin: 0 5% 2.5%;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: repeat(4, auto) 1fr;
    grid-row-gap: 7.5px;
    grid-template-areas:
      'progress progress progress progress progress'
      'playpause mute . . close';
  }
  #video-controls {
    & * {
      pointer-events: ${(props) =>
        props.showControls && props.mouseMoving ? 'all' : 'none'};
      opacity: ${(props) =>
        props.showControls && props.mouseMoving ? '1' : '0'};
      display: grid;
      transition: all 0.3s ease;
    }
  }

  .controls progress {
    display: block;
    width: 100%;
    height: 2px;
    margin-top: 2px;
    margin-top: 0.125rem;
    border: none;
    overflow: hidden;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    color: ${({ theme }) =>
      theme.lightText}; /* Internet Explorer uses this value as the progress bar's value colour */
  }
  .controls progress span {
    width: 0%;
    height: 100%;
    display: inline-block;
    background-color: ${({ theme }) => theme.lightText};
  }
  .controls progress::-moz-progress-bar {
    background-color: ${({ theme }) => theme.lightTitle};
  }
  /* Chrome requires its own rule for this, otherwise it ignores it */
  .controls progress::-webkit-progress-value {
    background-color: ${({ theme }) => theme.lightTitle};
  }
  .controls > * {
    height: 100%;
  }
  .controls button {
    width: 16px;
    height: 16px;
    border: 0;
    padding: 0;
    background: none;
    outline: 0;
    margin-right: 10px;
    cursor: pointer;
  }
  .progress {
    cursor: pointer;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
  }
  #duration {
    color: ${({ theme }) => theme.lightText};
    font-size: 1.1rem;
    line-height: 1;
    letter-spacing: 0.8px;
    height: 16px;
    display: flex;
    align-items: center;
    pointer-events: none;
  }
  #close {
    justify-self: right;
    margin-right: 0;
  }

  .dark-background {
    padding-bottom: 10rem;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0)
    );
  }

  .full-video-link {
    position: absolute;
    bottom: ${({ theme }) => theme.spacingS};
    left: ${({ theme }) => theme.spacingM};
    color: ${({ theme }) => theme.lightText};
    font-size: 14px;
    z-index: 1;
    cursor: pointer;

    svg {
      margin-right: ${({ theme }) => theme.spacingXXXS};
    }

    span {
      display: inline-block;
      transform: translateY(-2px);
    }
  }

  @media screen and (max-width: 1000px) {
    ${(props) =>
      !props.showControls &&
      `
    figure {
      background: url(${props.mobileImg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    video {
      display: none;
    }
  `}
  }
`

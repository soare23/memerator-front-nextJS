import React from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
} from 'react-share';
import { FacebookIcon, FacebookMessengerIcon, WhatsappIcon } from 'react-share';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: '#dde0e4',
    backgroundColor: '#606061',
  },
}));

function VideoMeme({ title, type, url, index, id }) {
  const [postCopied, setPostCopied] = useState(false);
  const classes = useStyles();

  // post URL
  let urlToShare = `https://customstreams.co/posts/${id}`;

  return (
    <div key={index}>
      <div className="title-share-button-container">
        <h3>
          <a href={`/posts/${id}`} target="_blank">
            {title}
          </a>
        </h3>

        <CopyToClipboard text={urlToShare} onCopy={() => setPostCopied(true)}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            size="small"
            onClick={setTimeout(() => {
              setPostCopied(false);
            }, 2000)}
          >
            {postCopied ? (
              <span id="copy-success">Copied</span>
            ) : (
              <span>Share</span>
            )}
          </Button>
        </CopyToClipboard>
      </div>
      {type === 'reddit-video' ? (
        <div className="video-container">
          <video playsInline autoPlay loop muted controls id="video">
            <source src={url} type="video/mp4"></source>
          </video>
          <div className="share-buttons-main-page-container">
            <h3>Share it</h3>
            <div>
              <FacebookShareButton url={urlToShare} title={title}>
                <FacebookIcon size={45} round={true}></FacebookIcon>
              </FacebookShareButton>
              <FacebookMessengerShareButton url={urlToShare} title={title}>
                <FacebookMessengerIcon
                  size={45}
                  round={true}
                ></FacebookMessengerIcon>
              </FacebookMessengerShareButton>
              <WhatsappShareButton url={urlToShare} title={title}>
                <WhatsappIcon size={45} round={true}></WhatsappIcon>
              </WhatsappShareButton>
            </div>
          </div>
          <hr></hr>
        </div>
      ) : (
        <div className="video-container">
          <iframe
            src={`${url}?autoplay=1&mute=1&playsinline=1&loop=1`}
            title={title}
          ></iframe>
          <div className="share-buttons-main-page-container">
            <h3>Share it</h3>
            <div>
              <FacebookShareButton url={urlToShare} title={title}>
                <FacebookIcon size={45} round={true}></FacebookIcon>
              </FacebookShareButton>
              <FacebookMessengerShareButton url={urlToShare} title={title}>
                <FacebookMessengerIcon
                  size={45}
                  round={true}
                ></FacebookMessengerIcon>
              </FacebookMessengerShareButton>
              <WhatsappShareButton url={urlToShare} title={title}>
                <WhatsappIcon size={45} round={true}></WhatsappIcon>
              </WhatsappShareButton>
            </div>
          </div>
          <hr></hr>
        </div>
      )}
    </div>
  );
}

export default VideoMeme;

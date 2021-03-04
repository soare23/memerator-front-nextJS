import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Magnifier, TOUCH_ACTIVATION } from 'react-image-magnifiers';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  FacebookShareCount,
  RedditShareCount,
  TumblrShareCount,
} from 'react-share';
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
} from 'react-share';

// material UI
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function ImagePost({ postDetails }) {
  const classes = useStyles();

  // create shareable URL
  let urlToShare = `https://customstreams.co/posts/${postDetails.id}`;

  // check if post is image/youtube video or reddit video
  let postToShow = '';

  if (postDetails.type === 'image') {
    postToShow = (
      <div className="meme-container">
        <Magnifier
          style={{ maxWidth: '100%' }}
          imageSrc={postDetails.mediaUrl}
          imageAlt="meme"
          dragToMove={false}
          touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
        />
      </div>
    );
  } else if (postDetails.type === 'reddit-video') {
    postToShow = (
      <div className="video-container">
        <video playsInline autoPlay loop muted controls id="video">
          <source src={postDetails.mediaUrl} type="video/mp4"></source>
        </video>
        <hr></hr>
      </div>
    );
  } else {
    postToShow = (
      <div className="video-container">
        <iframe
          src={`${postDetails.mediaUrl}?autoplay=1&mute=1&playsinline=1&loop=1`}
          title={title}
        ></iframe>
        <hr></hr>
      </div>
    );
  }

  return (
    <div className="main-container item-page">
      <h3>{postDetails.title}</h3>
      {postToShow}
      <div className="see-more-button-container">
        <Button variant="outlined" color="secondary">
          <a href="/">See more</a>
        </Button>
      </div>
      <hr></hr>
      <div className="social-share-buttons-container">
        <FacebookShareButton url={urlToShare} title={postDetails.title}>
          <FacebookIcon size={45} round={true}></FacebookIcon>
        </FacebookShareButton>
        <FacebookMessengerShareButton
          url={urlToShare}
          title={postDetails.title}
        >
          <FacebookMessengerIcon size={45} round={true}></FacebookMessengerIcon>
        </FacebookMessengerShareButton>
        <RedditShareButton url={urlToShare} title={postDetails.title}>
          <RedditIcon size={45} round={true}></RedditIcon>
        </RedditShareButton>
        <TelegramShareButton url={urlToShare} title={postDetails.title}>
          <TelegramIcon size={45} round={true}></TelegramIcon>
        </TelegramShareButton>
        <TwitterShareButton url={urlToShare} title={postDetails.title}>
          <TwitterIcon size={45} round={true}></TwitterIcon>
        </TwitterShareButton>
        <WhatsappShareButton url={urlToShare} title={postDetails.title}>
          <WhatsappIcon size={45} round={true}></WhatsappIcon>
        </WhatsappShareButton>
        <ViberShareButton url={urlToShare} title={postDetails.title}>
          <ViberIcon size={45} round={true}></ViberIcon>
        </ViberShareButton>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    `https://www.opsolutions.ro/meme/${context.params.postID}`
  );
  return {
    props: {
      postDetails: response.data,
    },
  };
}

export default ImagePost;

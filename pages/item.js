import React from 'react';
import { Magnifier, TOUCH_ACTIVATION } from 'react-image-magnifiers';
import {
  FacebookShareButton,
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

function item({ url }) {
  url = 'https://i.redd.it/va9idxq6ylj61.png';
  return (
    <div className="main-container item-page">
      <div className="meme-container">
        <Magnifier
          style={{ maxWidth: '100%' }}
          imageSrc={url}
          imageAlt="meme"
          dragToMove={false}
          touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
        />
      </div>

      <div>
        <h3>Share it with your friends!</h3>
      </div>
      <div className="social-share-buttons-container">
        <FacebookShareButton url={url}>
          <FacebookIcon size={45} round={true}></FacebookIcon>
        </FacebookShareButton>
        <RedditShareButton url={url}>
          <RedditIcon size={45} round={true}></RedditIcon>
        </RedditShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon size={45} round={true}></TelegramIcon>
        </TelegramShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon size={45} round={true}></TwitterIcon>
        </TwitterShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={45} round={true}></WhatsappIcon>
        </WhatsappShareButton>
        <ViberShareButton url={url}>
          <ViberIcon size={45} round={true}></ViberIcon>
        </ViberShareButton>
      </div>
    </div>
  );
}

export default item;

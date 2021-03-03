import { React, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import https from 'https';
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

export function ImagePost({ post }) {
  const router = useRouter();
  const postID = router.query.item;
  const [postDetails, setPostDetails] = useState(post);

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`https://www.opsolutions.ro/meme/${router.query.postID}`)
        .then(({ data }) => {
          setPostDetails(data);
        });
    }

    if (post.length === 0) {
      fetchData();
    }
  }, []);

  // create shareable URL
  let urlToShare = `https://customstreams.co/posts/${postID}`;

  return (
    <div className="main-container item-page">
      <h3>{postDetails.title}</h3>
      {/* <div className="meme-container">
        <Magnifier
          style={{ maxWidth: '100%' }}
          imageSrc={postDetails.mediaUrl}
          imageAlt="meme"
          dragToMove={false}
          touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
        />
      </div> */}
      <div className="meme-container">
        <img src={postDetails.mediaUrl} alt="post"></img>
      </div>
      <div>
        <h3>Share it with your friends!</h3>
      </div>
      <div className="social-share-buttons-container">
        <FacebookShareButton url={urlToShare}>
          <FacebookIcon size={45} round={true}></FacebookIcon>
        </FacebookShareButton>
        <FacebookMessengerShareButton url={urlToShare}>
          <FacebookMessengerIcon size={45} round={true}></FacebookMessengerIcon>
        </FacebookMessengerShareButton>
        <RedditShareButton url={urlToShare}>
          <RedditIcon size={45} round={true}></RedditIcon>
        </RedditShareButton>
        <TelegramShareButton url={urlToShare}>
          <TelegramIcon size={45} round={true}></TelegramIcon>
        </TelegramShareButton>
        <TwitterShareButton url={urlToShare}>
          <TwitterIcon size={45} round={true}></TwitterIcon>
        </TwitterShareButton>
        <WhatsappShareButton url={urlToShare}>
          <WhatsappIcon size={45} round={true}></WhatsappIcon>
        </WhatsappShareButton>
        <ViberShareButton url={urlToShare}>
          <ViberIcon size={45} round={true}></ViberIcon>
        </ViberShareButton>
      </div>
    </div>
  );
}

ImagePost.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return {
      post: [],
    };
  }
  const query = ctx.query;
  console.log(query.postID);
  const response = await fetch(
    `https://www.opsolutions.ro/meme/${query.postID}`
  );
  const postDetails = await response.json();
  return {
    post: postDetails,
  };
};

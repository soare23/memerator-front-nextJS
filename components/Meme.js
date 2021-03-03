import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: '#dde0e4',
    backgroundColor: '#606061',
  },
}));

function Meme({ title, url, handleError, index, id }) {
  const [postCopied, setPostCopied] = useState(false);
  const classes = useStyles();
  console.log(id);

  return (
    <div>
      <div className="title-share-button-container">
        <div className="link-container">
          <Link href="/item">
            <a>{title}</a>
          </Link>
        </div>

        <CopyToClipboard text={url} onCopy={() => setPostCopied(true)}>
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
      <Link as={`/posts/${id}`} href={'/posts/postID'}>
        <img
          src={url}
          key={index}
          onLoad={(e) => {
            handleError(e, index);
          }}
        ></img>
      </Link>
    </div>
  );
}

export default Meme;

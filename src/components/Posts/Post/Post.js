import React from 'react';
import { Card,  CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import {  deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
      <div className={classes.overlay}>
              <Button size="medium" color="secondary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /></Button>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.title}>
       <Typography variant="h4">{post.creator}</Typography>
       <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
       <Typography variant="h5" color="textSecondary" component="p">{post.message}</Typography>
        <Typography variant="h5" color="textSecondary" component="h2">{post.tags.map((tag) => `$${tag} `)}</Typography>
      </div>
    </Card>
  );
};

export default Post;



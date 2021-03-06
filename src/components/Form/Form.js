import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { CREATE, UPDATE } from '../../constants/actionTypes';




const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' , email:'' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' , email:''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (postData.creator === ''){
      return 
    }

   
    if (currentId === 0) {
      dispatch({type:CREATE , payload: postData});
   
      clear();
    } else {
      dispatch({type:UPDATE , payload: postData(currentId)});
      clear();
    }
  };
  
  const formRef = React.useRef();
  return (
    <Paper className={classes.paper}>
      <form ref={formRef} autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography required underline variant="h4">{currentId ? `Editing "${post.creator}"` : 'Add  Employee '}</Typography>
        <TextField required name="FullName" variant="outlined" label="Full Name  " fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField   name="Job-Title" variant="outlined" label="Job -Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="email" type='email' variant="outlined" label="Email" fullWidth  value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField type='number'  name="tags" variant="outlined" label="Salary " fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button onClick={() => formRef.current.reportValidity()} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;

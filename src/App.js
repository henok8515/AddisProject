import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
// import useStyles from './styles';
import Header from './components/Header/Header';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  // const [post ,setPost]=useState([])
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
<Header />
      <Grow style={{
        marginTop:'30px'
      }} in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid  item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

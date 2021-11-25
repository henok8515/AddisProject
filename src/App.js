import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
// import useStyles from './styles';
import Header from './components/Header/Header';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register'
const App = () => {
  const [currentId, setCurrentId] = useState(0);
 
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
   <Router>
    <Container maxWidth="lg">
     
        <Grow in>
        <Switch>
   
        <Container>
        <Route exact component={Header} path='/' />
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid  item xs={12} sm={7}>
              <Route exact path='/'
               render={(props) => (
                 <Posts
                 {...props} setCurrentId={setCurrentId} />)} />
                </Grid>
                <Grid item xs={12} sm={4}>
                <Route exact path='/'    render={(props) => (
                <Form {...props} setCurrentId={setCurrentId}  currentId={currentId}/> )}/>
                </Grid>
                </Grid>
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/register' component={Register} />
              </Container>
              </Switch>
            </Grow>
     </Container>
    </Router>
  );
};

export default App;

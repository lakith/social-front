import React, { useCallback, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { fetchPosts } from '../actions/post'
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from '../store'
import SinglePost from '../components/posts/SinglePost';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootStyles: {
      marginTop:50,
      marginBottom:50,
    },
    root: {
      flexGrow: 1,
    },
    cardRoot: {
      minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
  }),
);

export default function AllPosts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postList = useSelector((state: RootStore) => state.posts)

  const fetchAllPosts = useCallback(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  useEffect(() => {
    fetchAllPosts()
  },[fetchAllPosts]) 

  return (
    <div className={classes.root}>
    <Container className={classes.rootStyles}>
      <Grid container spacing={3}>
        { postList.length ? postList.map(post => {
            return (
              <Grid item xs={12} key={post._id}>
                <SinglePost post={post} />
              </Grid>
            )
        }) : <p> No Posts</p>}
      </Grid>
    </Container>
    </div>
  );
}
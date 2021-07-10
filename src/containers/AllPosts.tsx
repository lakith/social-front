import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import {Post, fetchPosts } from '../actions/post'
import { Comment, fetchComments } from '../actions/comments'
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from '../store'

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

  useEffect(() => {
    dispatch(fetchPosts())
  },[])

  return (
    <div className={classes.root}>
    <Container className={classes.rootStyles}>
      <Grid container spacing={3}>
        { postList.length ? postList.map(post => {
            <Grid item xs key={post._id}>
                <Card className={classes.cardRoot}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        {post.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                        {post.postContent}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        }) : <p> No Posts</p>}
      </Grid>
    </Container>
    </div>
  );
}
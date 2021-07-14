import React from 'react';
import { makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Post } from '../../actions/post';



interface Props {
  post: Post
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

function SinglePost(props: Props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.post.postContent}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {props.post.comments.length} {props.post.comments.length > 1 ? "Comments" : "Comment"}
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default SinglePost;

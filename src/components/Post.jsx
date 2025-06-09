import { ExpandMore, Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from "@mui/material";
import { red } from '@mui/material/colors';

export default function Post(props) {
    return (
        <Card sx={{margin: '5px'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert/>
            </IconButton>
          }
          title={props.post.title}
          subheader={props.post.subHeader}
        />
        <CardMedia
          component="img"
          height="20%"
          image={props.post.imgLink}
          alt={props.post.imgAlt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.post.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
      </CardActions>
              </Card>
    )
}
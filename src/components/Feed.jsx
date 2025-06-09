import {Box} from "@mui/material";
import Post from "./Post";


export default function Feed() {
    const posts = [
        {
            title:'visage',
            imgLink:'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
            imgAlt:'nature',
            subHeader:'September 26',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, impedit! Aperiam accusamus culpa at, reiciendis consequuntur eum quos necessitatibus aspernatur vero cum, earum voluptatum fugit natus dolorem atque harum corrupti.',
        },
        {
            title:'create',
            imgLink:'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
            imgAlt:'nature',
            subHeader:'December 26',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, impedit! Aperiam accusamus culpa at, reiciendis consequuntur eum quos necessitatibus aspernatur vero cum, earum voluptatum fugit natus dolorem atque harum corrupti.',
        },
        {
            title:'bitch',
            imgLink:'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-morning-in-flowering-mountain-landscape-free-image.jpeg?w=600&quality=80',
            imgAlt:'nature',
            subHeader:'January 26',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, impedit! Aperiam accusamus culpa at, reiciendis consequuntur eum quos necessitatibus aspernatur vero cum, earum voluptatum fugit natus dolorem atque harum corrupti.',
        },
    ]

    

    return (
        <Box flex={4} p={2}>
           {posts.map(post=>(<Post post={post} key={post.title}/>))}
        </Box>
    )
}
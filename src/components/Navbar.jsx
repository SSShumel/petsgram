import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, MenuList, styled, Toolbar, Typography } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";


const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div')(({theme})=>({
    backgroundColor: 'white',
    color: 'black',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius, //что такое theme и как к нему обращаться 
    width: '40%',
}))
const Icons = styled(Box)(({theme})=>({
   display:'none',
   gap:'20px',
   alignItems:'center',
   [theme.breakpoints.up('sm')]: {
    display:'flex'
}
}))

const UserBox = styled(Box)(({theme})=>({
    display:'flex',
    gap:'10px',
    alignItems:'center',
    [theme.breakpoints.up('sm')]: {
        display:'none'
    }
 }))

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography 
                    variant="h6" 
                    sx={{display: {xs: 'none', sm: 'block'}}}
                >
                    Petsgram
                </Typography>
                <PetsIcon sx={{display: {xs: 'block', sm: 'none'}}}/>
                <Search><InputBase placeholder="search"/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications/>
                    </Badge>    
                    <Avatar 
                        onClick={()=>setOpen(true)} 
                        sx={{width:30,height:30}} 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCYZPMGDqqUCTaZKpUKaJarB4GDpS38kEBQ&s"/>
                </Icons>
                <UserBox onClick={()=>setOpen(true)}>
                    <Avatar sx={{width:30,height:30}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCYZPMGDqqUCTaZKpUKaJarB4GDpS38kEBQ&s"/>
                    <Typography>Pudge</Typography>
                </UserBox>
                <Menu
                    onClose={()=>setOpen(false)}
                    id="basic-menu"
                    open={open}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical:'top',
                        horizontal:'right',
                    }} 
                    transformOrigin={{
                        vertical:'top',
                        horizontal:'right',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </StyledToolbar>
        </AppBar>
    )
}
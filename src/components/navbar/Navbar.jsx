import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { auth} from "../../firebase"
import { signOut } from "firebase/auth";
import { signin } from '../../firebase_func';
import InboxPopUp from './InboxPopUp';
import { Link } from 'react-router-dom';


const Navbar = ({user}) => {
  const [anchorElNav, setAnchorElNav] = useState()
  const [anchorElUser, setAnchorElUser] = useState()
  const[popUpInbox,setPopUpInbox]=useState(false)
  const handleClick=()=>{
    setPopUpInbox(true)
  }
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const logout =()=>{
    signOut(auth).then(() => {
      console.log("logout  sucess")
      // Sign-out successful.
    }).catch((error) => {
      console.log("error in logout",error)
    });
  }

  return (
    <>
    <InboxPopUp user={user} popUpInbox={popUpInbox} setPopUpInbox={setPopUpInbox} />
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to={"/"} style={{textDecoration:"none",color:"inherit"}} >
           <span style={{"paddingTop":8,"marginRight":10}}>BOOKZONE</span> 
            <img style={{"height":60}} src={require('./PicsArt_05-29-07.14.49.png')} alt="logo" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem /* sx={{"justifyContent":"flex-end"}} */ key={"Inbox"} onClick={handleClick}>
                  <Typography textAlign="center">Inbox</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to={"/"}>
            <img style={{"height":70}} src={require('./PicsArt_05-29-07.14.49.png')} alt="logo" />
            </Link>
          </Typography>
          
          <Box sx={{ "justifyContent":"flex-end", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Button  key={"Inbox"} onClick={handleClick} sx={{"marginRight":10 , my: 2, color: 'white', display: 'block' }}>
                  Inbox
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {!user ?(
                  <Avatar alt="femy Sharp" src={require('./download.png')} />
                ):(
                  <Avatar alt="femy Sharp" src={user.photoURL} />
                )}
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                { user ? (
                  <>
                <Link to={"profile"} style={{textDecoration:"none",color:"inherit"}} >
                <MenuItem key={'Profile'} >
                   <Typography textAlign="center">Profile</Typography>
                 </MenuItem>
                 </Link>
                <MenuItem key={"Logout"} onClick={logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
                </>):(<MenuItem key={"SignIn"} onClick={signin}>
                  <Typography textAlign="center">SignIn</Typography>
                </MenuItem>)}
               
               
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};
export default Navbar;
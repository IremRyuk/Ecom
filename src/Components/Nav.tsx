import React, { useEffect,useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { WinWidthAct } from '../Redux/Actions/WinWidthAct'
import { AppBar, IconButton, Toolbar,Typography,Drawer,Box,Button} from '@mui/material'
import { Input } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,useNavigate } from 'react-router-dom';
import { SearchTheme } from './Styles';
import { SearchNav } from '../Redux/Actions/SearchNav';

export default function Nav() {
    // Redux
    let dispatch = useDispatch()
    // seach
    let searchs = useSelector((state:string)=>state.search)
    // window width
    let winWidths = useSelector((state:any)=>state.winInnerWidth)

    // Drawer open BOOLEAN
    let [isOpen,setOpen] = useState<boolean>(false)
    let navigate = useNavigate()
    
    // set window width in redux
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            let setWidth = window.innerWidth
            dispatch(WinWidthAct(setWidth))
        })
    })
    
    // search function
    let searchWords = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SearchNav(event.target.value))
    }

  return (
    <AppBar position='absolute' sx={{width:'100vw'}}>
        <Toolbar>
            <Box flexGrow={1}>
            <Button variant='text' sx={{color:'white',cursor:'pointer',fontSize:'xx-large',fontFamily:'Dancing Script,cursive'}} onClick={()=>{navigate('/')}}>
IremRyuk
            </Button>
            </Box>
            <Input 
            type='text' 
            placeholder='search' 
            sx={SearchTheme}
            value={searchs}
            onChange={searchWords}
            disableUnderline
            />
            {winWidths>=768 && 
            <>
            <IconButton onClick={()=>{setOpen(true)}}>
            <MenuIcon fontSize='large' sx={{color:'white'}}/>
            </IconButton>
            <Drawer
            anchor='right'
            open={isOpen}
            onClose={()=>setOpen(false)}
            >
                <Box 
                width='250px' 
                display='flex' 
                flexDirection='column' 
                alignItems='center'>
                    <Typography variant='h4' sx={{fontWeight:'bold',marginTop:'10px'}}>Catargories</Typography>
                    <Link  to='/'>Home</Link>
                    <Link  to='/'>Home</Link>
                    <Link  to='/'>Home</Link>
                </Box>
            </Drawer>
            </>
            }
        </Toolbar>
    </AppBar>
  )
}

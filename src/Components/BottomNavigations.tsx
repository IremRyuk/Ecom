import { useEffect,useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { WinWidthAct } from '../Redux/Actions/WinWidthAct'
import {useSelector,useDispatch} from 'react-redux'
import {BottomNavigation,BottomNavigationAction} from '@mui/material'
import {useNavigate} from 'react-router-dom'


export default function BottomNavigations() {
    let navigate = useNavigate()
    let winWidths = useSelector((state:any)=>state.winInnerWidth)
    let [item,setItem] = useState<number>(0)
    let dispatch = useDispatch()
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            let setWidth = window.innerWidth
            dispatch(WinWidthAct(setWidth))
        })
    })
  return (
    <>
    {winWidths<768 &&
        <BottomNavigation 
        sx={{width:'100vw',position:'absolute',bottom:'0%',left:'0%',justifyContent:'space-around',backgroundColor:'#eee'}} 
        value={item} 
        onChange={(event,newItem:number)=>{console.log(event),setItem(newItem)}} 
        >
            <BottomNavigationAction label='Home' onClick={()=>navigate('/')} icon={<HomeIcon />} />
            <BottomNavigationAction label='Shop' onClick={()=>navigate('/shop')} icon={<ShoppingCartIcon  />} />
            <BottomNavigationAction label='Contacts' onClick={()=>navigate('/contacts')} icon={<ContactsIcon />} />
        </BottomNavigation>
        }
    </>
  )
}

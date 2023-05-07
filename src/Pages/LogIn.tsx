// Mui
import Typography from '@mui/material/Typography'
import {Stack, TextField,InputAdornment,IconButton, Button, SpeedDial,SpeedDialAction} from '@mui/material'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { UserNameAct,UserNameActReset } from '../Redux/Actions/LogIn/UserNameAct'
import { UserPassword,UserPasswordReset } from '../Redux/Actions/LogIn/UserPasswordAct'
// Styles
import '../Styles/LogIn/login.css'
import { Inputs, IremRyuk, SignUp, StackLogin, Submit,SpeedDiale, IremRyuk1, IremRyuk2, } from '../Components/PagesStyles'
// Icons
import ClearIcon from '@mui/icons-material/Clear';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// React Router Dom
import { useNavigate } from 'react-router-dom'


export default function LogIn() {
  // react router dom 
  let navigate = useNavigate()

  // redux
    let username = useSelector((state:any)=>state.userName)
    let userpassword = useSelector((state:any)=>state.userPassword)
    let dispatch = useDispatch()
  return (
    <div className="logIn">

        <Typography sx={IremRyuk}>Welcome to IremRyuk</Typography>
        <Typography sx={IremRyuk1}>Unlimited movies, TV shows, EveryThing That You Love and more</Typography>
      <Typography sx={IremRyuk2}>Watch anywhere. Watch anytime,Watch with Everybody</Typography>
        <Stack sx={StackLogin} direction='column'>
            <center>
              {/* UserName */}


            <TextField
              sx={Inputs}
              placeholder='UserName'

              variant='outlined'
              color={username.length>4?'success':'error'}
              inputProps={{style: {fontSize:'large'}}}
              InputLabelProps={{style: {fontSize: 'large'}}}

              value={username}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(UserNameAct(e.target.value))}

              InputProps={{
              endAdornment:
                <InputAdornment position="end">
                <IconButton onClick={()=>dispatch(UserNameActReset(''))}>
                   {username?<ClearIcon sx={{color:'red'}}/>:''}
                </IconButton>
                </InputAdornment>
              }}
            />


            <br />
            <br />


            {/* Password */}
            <TextField
              sx={Inputs}
              placeholder='Password'

              variant='outlined'
              color={userpassword.length>4?'success':'error'}
              inputProps={{style: {fontSize:'large'}}}
              InputLabelProps={{style: {fontSize: 'large'}}}

              value={userpassword}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(UserPassword(e.target.value))}

              InputProps={{
              endAdornment:
                <InputAdornment position="end">
                <IconButton onClick={()=>dispatch(UserPasswordReset(''))}>
                   {userpassword?<ClearIcon sx={{color:'red'}}/>:''}
                </IconButton>
                </InputAdornment>
              }}
            />
            <br />
            <br />


            {/* Buttons */}
            <Button 
            disableElevation
            disableRipple
            disableTouchRipple
            onClick={()=>{}} 
            sx={Submit}>Get Start</Button>
            <br />
            <br />
            </center>
        </Stack>      


        {/* Sign Up Page Button */}
        <Button 
        disableElevation
        disableRipple
        disableTouchRipple
        variant='contained' 
        sx={SignUp}
        onClick={()=>navigate('/signup')}
        >Sign Up</Button>


        {/* Help */}
        <SpeedDial
        ariaLabel='Help'
        sx={SpeedDiale}
        icon={<LiveHelpIcon />}
        openIcon={<ArrowDownwardIcon />}
        >
<SpeedDialAction 
onClick={()=>{window.location.href = 'tel://' + 591603603}} 
icon={<SupportAgentIcon />} 
tooltipTitle='Call Support' 
/>
        </SpeedDial>
    </div>
  )
}

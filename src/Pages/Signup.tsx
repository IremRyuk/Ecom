// Styles
import { BackBtn, ButtonGroup, Inputs, IremRyuk, ResetBtn, SignUpBtn, SpeedDiale, StackLogin} from '../Components/PagesStyles'
import '../Styles/Sign Up/signup.css'
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Mui
import {Typography,Stack,TextField,InputAdornment,IconButton, Button,SpeedDial,SpeedDialAction } from '@mui/material'
import { UserNameAct,UserNameActReset,UserLoginAct,UserLoginActReset,UserPasswordAct,UserPasswordActReset } from '../Redux/Actions/Sign Up/SignUpAct';
// React Router Dom
import { useNavigate } from 'react-router-dom';
// Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function SignUp() {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let userName = useSelector((state:any)=>state.userNameSU)
  let userLogin = useSelector((state:any)=>state.userLoginSU)
  let userPassword = useSelector((state:any)=>state.userPasswordSU)
  return (
    <div className="signUp">
      <Typography sx={IremRyuk}>Sign Up</Typography>
      <Stack sx={StackLogin}>
        <center>
        <TextField
              sx={Inputs}
              placeholder='Name'

              variant='outlined'
              color={userName.length>4?'success':'error'}
              inputProps={{style: {fontSize:'large'}}}
              InputLabelProps={{style: {fontSize: 'large'}}}

              value={userName}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(UserNameAct(e.target.value))}

              InputProps={{
              endAdornment:
                <InputAdornment position="end">
                <IconButton onClick={()=>dispatch(UserNameActReset(''))}>
                    {userName?<ClearIcon sx={{color:'red'}}/>:''}
                </IconButton>
                </InputAdornment>
              }}
            />

<br />
<br />

            {/* Login */}
        <TextField
              sx={Inputs}
              placeholder='Login'

              variant='outlined'
              color={userLogin.length>4?'success':'error'}
              inputProps={{style: {fontSize:'large'}}}
              InputLabelProps={{style: {fontSize: 'large'}}}

              value={userLogin}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(UserLoginAct(e.target.value))}

              InputProps={{
              endAdornment:
                <InputAdornment position="end">
                <IconButton onClick={()=>dispatch(UserLoginActReset(''))}>
                    {userLogin?<ClearIcon sx={{color:'red'}}/>:''}
                </IconButton>
                </InputAdornment>
              }}
            />

<br />
<br />

        <TextField
              sx={Inputs}
              placeholder='Name'

              variant='outlined'
              color={userPassword.length>4?'success':'error'}
              inputProps={{style: {fontSize:'large'}}}
              InputLabelProps={{style: {fontSize: 'large'}}}

              value={userPassword}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch(UserPasswordAct(e.target.value))}

              InputProps={{
              endAdornment:
                <InputAdornment position="end">
                <IconButton onClick={()=>dispatch(UserPasswordActReset(''))}>
                    {userPassword?<ClearIcon sx={{color:'red'}}/>:''}
                </IconButton>
                </InputAdornment>
              }}
            />
                  <br />
                  <br />
      <Stack sx={ButtonGroup} direction='row'>
        <Button sx={ResetBtn}>Reset</Button>
        <Button sx={SignUpBtn}>Sign Up</Button>
      </Stack>

        </center>
      </Stack>
      <Button 
      startIcon={<ArrowBackIcon />} 
      sx={BackBtn}
      onClick={()=>{navigate('/')}}
      >Back</Button>

      {/* SpeedDieal */}
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

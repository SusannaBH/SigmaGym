import Styles from './styles.module.css';
import { logOut } from '../../services/localStorage'
import { useState } from 'react';
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import { Link as RRLink, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleProfile = () => {
    navigate("/profile")
  }
  const handleOut = () => {
    logOut()
    navigate("/login")
  }
  const handleContact = () => {
    navigate("/contact")
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }} className={Styles.backgroundNav}>
        <Button variant="contained" className={Styles.button}>
          <RRLink to="/home" className={Styles.enlace} style={{ textDecoration: 'none' }}>HOME 🏠</RRLink>
        </Button>
        <Button variant="contained" className={Styles.button}>
          <RRLink to="/plans" className={Styles.enlace} style={{ textDecoration: 'none' }}>PLANES 💲</RRLink>
        </Button>
        <Button variant="contained" className={Styles.button}>
          <RRLink to="/gyms" className={Styles.enlace} style={{ textDecoration: 'none' }}>GYMS 🏋️‍♀️</RRLink>
        </Button>
        <Button variant="contained" className={Styles.button}>
          <RRLink to="/classes" className={Styles.enlace} style={{ textDecoration: 'none' }}>CLASES 🗓️</RRLink>
        </Button>
        {/* BOTON PARA CUANDO SE REALICE LA SECCION TORNEOS */}
        {/*<Button variant="contained" className={Styles.button}>
          <RRLink to="/" className={Styles.enlace} style={{ textDecoration: 'none' }}>TORNEOS 🏆</RRLink>
          </Button>*/}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 40, height: 40, bgcolor: 'darkcyan', border: '2px solid aquamarine' }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            bgcolor: 'aquamarine',
            color: 'darkcyan',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'aquamarine',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfile}>
          <Avatar sx={{ bgcolor: 'darkcyan' }} /> Mi perfil
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleContact}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Atención cliente
        </MenuItem>
        <MenuItem onClick={handleOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </>
  )
}

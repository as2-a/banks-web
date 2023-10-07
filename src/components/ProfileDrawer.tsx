import { Logout, TransitEnterexit } from "@mui/icons-material";
import { Drawer, IconButton, MenuItem, ListItemIcon, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProfileDrawer({
    profileMenuOpen,
    toggleProfileMenu,
    profileImage,
    profileName,
    profileEmail,
    menuItems,
    buttonStyle
}: any) {
    const navigate = useNavigate();
    const handleRedirect = (route: string) => {
        navigate(`/banks-web/${route}`);
      };
    return (
        <Drawer
            anchor="left"
            open={profileMenuOpen}
            onClose={toggleProfileMenu}
        >
            <div style={{ width: "80vw", height: "100vh", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ textAlign: "start", marginBottom: "16px" }}>
                    <IconButton
                        edge="end"
                        aria-label="menu"
                        style={{ padding: 0 }}
                    >
                        <img
                            src={profileImage}
                            alt="Perfil del usuario"
                            height={30}
                            width={30}
                            style={{ borderRadius: "50%" }}
                        />
                    </IconButton>
                </div>
                <div style={{ textAlign: "start", marginBottom: "8px" }}>
                    <strong>{profileName}</strong>
                </div>
                <div style={{ textAlign: "start", marginBottom: "16px" }}>
                    {profileEmail}
                </div>
                {menuItems.map((item: any, index: any) => (
                    <MenuItem key={index} onClick={toggleProfileMenu}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <Button  onClick={()=>handleRedirect(item.route)} sx={item.buttonStyle}>{item.label}</Button>
                    </MenuItem>
                ))}
                <div style={{ flex: 1 }}></div>
                <MenuItem onClick={toggleProfileMenu}>
                    <ListItemIcon>
                        <TransitEnterexit />
                    </ListItemIcon>
                    <Button sx={buttonStyle}>Salir al portal</Button>
                </MenuItem>

                <MenuItem onClick={toggleProfileMenu}>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    <Button sx={buttonStyle}>Cerrar sesión</Button>
                </MenuItem>
            </div>
        </Drawer>
    );
}

export default ProfileDrawer;

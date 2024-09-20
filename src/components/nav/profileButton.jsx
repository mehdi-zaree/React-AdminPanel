import React from 'react';
import {IconButton} from "@mui/material";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import {AccountCircle} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function ProfileButton() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <IconButton variant="contained" {...bindTrigger(popupState)}>
                        <AccountCircle/>
                    </IconButton>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Profile</MenuItem>
                        <MenuItem onClick={popupState.close}>My account</MenuItem>
                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>    );
}

export default ProfileButton;

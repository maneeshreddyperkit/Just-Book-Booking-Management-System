import { GoogleLogout } from "react-google-login";

import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import env from "react-dotenv";
import { UserSlice } from "../../redux/user";
import "../../App.css";
import { fetchUserAdmin } from "../../redux/user/userThunk";

function Logout() {
    // const clientId = env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;
    const clientId = "597685710620-ghaue89dc3ustee0uq0snsbhsdisejoc.apps.googleusercontent.com";
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(
            UserSlice.actions.updateUserDetails({
                name: "",
                email: "",
                imageUrl: "",
            })
        );
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                render={(renderProps) => {
                    return (
                        <div
                            type="button"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            style={{
                                color: "#ffffff",
                                paddingRight: 36,
                                fontSize: 18,
                                alignItems: "center",
                                marginTop: "1rem",
                            }}
                        >
                            Logout
                        </div>
                    );
                }}
                buttonText="Logout"
                onLogoutSuccess={logout}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;

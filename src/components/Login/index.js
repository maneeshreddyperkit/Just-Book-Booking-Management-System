import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import env from "react-dotenv";
import { UserSlice } from "../../redux/user";
import "../../App.css";
import { fetchUserAdmin } from "../../redux/user/userThunk";

function Login({ buttonText }) {
    const clientId = "597685710620-ghaue89dc3ustee0uq0snsbhsdisejoc.apps.googleusercontent.com";
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const initClient = () => {
    //         gapi.client.init({
    //             clientId,
    //             scope: "",
    //         });
    //     };
    //     gapi.load("client:auth2", initClient);
    // }, []);

    const onSuccess = async (response) => {
        if (response && response.profileObj) {
            const { name, email, imageUrl } = response.profileObj;
            dispatch(
                UserSlice.actions.updateUserDetails({
                    name,
                    email,
                    imageUrl,
                })
            );
            await dispatch(fetchUserAdmin(email));
        }
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                render={(renderProps) => {
                    return (
                        <div
                            type="button"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            style={{
                                color: "#ffffff",
                                paddingRight: buttonText ? 0 : 56,
                                fontSize: 18,
                                alignItems: "center",
                                marginTop: buttonText ? 0 : "1rem",
                            }}
                        >
                            {buttonText || "Login"}
                        </div>
                    );
                }}
                buttonText={"Login"}
                onSuccess={onSuccess}
                onFailure={(response) =>
                    console.log({
                        response,
                    })
                }
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;

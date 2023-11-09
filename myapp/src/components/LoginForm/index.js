import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

function LoginForm(props) {
  const getHashKeyFromLocationAfterLogin = () => {
    const location = useLocation();
    console.log(location.hs);
    const hashKey = {};
    const queryParams = new URLSearchParams(window.location.search);
    const error = queryParams.get("error");

    if (error === "access_denied") {
      window.close();
    }

    hash
      .replace(/^#\/?/, "")
      .split("&")
      .forEach((keyValue) => {
        const spl = keyValue.indexOf("=");
        if (spl !== -1) {
          hashKey[keyValue.substring(0, spl)] = keyValue.substring(spl + 1);
        }
      });
    return hashKey;
  };

  const postHashKeyAsMessage = (hashKey) => {
    window.opener.postMessage(
      JSON.stringify({
        type: "access_token",
        access_token: hashKey.access_token,
        expires_in: hashKey.expires_in || 0,
      }),
      "*"
    );
    window.close();
  };

  const getMessageAndsetAccessTokenInCookies = () => {
    window.addEventListener(
      "message",
      (event) => {
        const hash = event.data;
        if (typeof hash === "string") {
          const parsedhash = JSON.parse(hash);
          if (parsedhash.type === "access_token") {
            const oneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
            Cookies.set("pa_token", parsedhash.access_token, {
              expires: oneHour,
            });
            window.location.replace("/");
          }
        }
      },
      false
    );
  };

  const isDevelopmentEnvironment = () => {
    if (
      process.env.NODE_ENV === "development" ||
      window.location.hostname === "http://localhost:3000"
    ) {
      return true;
    }
    return false;
  };

  const getRedirectURL = () => {
    if (isDevelopmentEnvironment()) {
      /* ADD THIS URL to your Application Redirect URIs to redirect after authentication success OR failure */
      return "http://localhost:3000/login";
    }
    /* Change this redirectURL accordingly before publishing your project and ADD THIS URL to your Application Redirect URIs to redirect after authentication success OR failure */
    return "https://sample.ccbp.tech/login";
  };

  const openLoginModal = () => {
    // YOU NEED TO ADD YOUR CLIENT ID HERE
    const clientId = "ab8efbc67e84475db99be284c0f096d5";

    const redirectUrl = getRedirectURL();

    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUrl}&scope=user-read-private%20user-read-email%20playlist-read-private%20playlist-modify-public%20playlist-modify-private%20user-library-read%20user-library-modify%20user-follow-read%20user-follow-modify&state=34fFs29kd09&show_dialog=true`;

    const width = 450;
    const height = 730;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    window.open(
      url,
      "Spotify",
      `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${width}, height = ${height}, top = ${top}, left = ${left}`
    );
  };

  const submitForm = async (event) => {
    event.preventDefault();
    openLoginModal();
  };

  useEffect(() => {
    const hashKey = getHashKeyFromLocationAfterLogin();

    if (hashKey.access_token) {
      postHashKeyAsMessage(hashKey);
    }

    getMessageAndsetAccessTokenInCookies();
  }, []);

  return (
    <div className="login-form-container w-full flex flex-row justify-center items-center">
      <form
        onSubmit={() => submitForm()}
        className="bg-black w-64 shadow-lg  border border-white  shadow-white   py-10  rounded-lg flex flex-col justify-center items-center"
      >
        <img
          draggable="false"
          src="https://assets.ccbp.in/frontend/react-js/spotify-remix-login-music.png"
          className="h-10 w-auto"
          alt="website logo"
        />

        <button
          type="button"
          style={{ backgroundColor: "#1DB954" }}
          className=" border-none text-center w-10/12 text-sm md:text-2xl text-white font-serif font-bold mt-7 cursor-pointer px-2 py-2 rounded-lg"
        >
          LOG IN SPOTIFY REMIX
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

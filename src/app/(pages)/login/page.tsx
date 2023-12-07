//SignInContainer.tsx
//Use client here
"use client";

import React from "react";
import * as Components from "../../../components/login/SignInComponents";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Formik, Field, Form, FormikHelpers } from "formik";

// import CustomToast from "./CustomToaster";
// import Cookies from "universal-cookie";
// import Cookies from "js-cookies";
// import { useNavigate } from "react-router-dom";
//import jwt decode here
// import { jwtDecode } from "jwt-decode";
// import Cookies from "universal-cookie";


interface SignUpContainerProps {
  $signinIn: boolean;
}

interface Values {
  username: string;
  password: string;
}

// interface AxiosError {
//   response?: {
//     data?: {
//       message?: string;
//     };
//   };
// }

const LoginPage: React.FC<SignUpContainerProps> = ({ $signinIn }) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [issignIn, toggle] = React.useState(true);
  //use useNavigation
  // const navigate = useNavigate();

  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    try {
      // Assuming you get the values from a form or some other source
      const val: Values = {
      username: "username", // Replace with the actual username
      password: "password", // Replace with the actual password
    };

      // Perform login authentication logic here
      const res = await signIn("credentials", {
        redirect: false,
        username: val.username,
        password: val.password,
        callbackUrl: "/",
      });

      // print error if error
      if (res?.error) {
        toast.error("Invalid credentials");
      } else {
        toast.success("Login success");
        console.log(res);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
    // console.log("Masukan login");
    // e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3001/user/login",
    //     {
    //       email: loginEmail,
    //       password: loginPassword,
    //     },
    //     {
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );
    //   const Cookies = (await import("universal-cookie")).default as any;
    //   const cookies = new Cooimport LoginPage from './page';
    // kies();
    //   cookies.set("jwt", response.data.token, {
    //     path: "/",
    //     expires: new Date(Date.now() + 12096e5),
    //   });
    // localStorage.set('pengguna', JSON.stringify(response.data.pengguna));
    // Cookies.set("jwt", response.data.token, {
    //   expires: jwtDecode(response.data.token).exp,
    // });
    // console.log(response);
    // RUBAH YANG DIBAWAH INI -------------------------------------------------------------------------------------------------------------
    // Cookie.set("id_user", response.data.pengguna.email);
    // const idUser = Cookie.get("id_user");
    // console.log("id_user");
    // if (!Cookie.get(idUser)) {
    //   // Added closing parenthesis here
    //   Cookie.set(idUser, []);
    // }
    //--------------------------------------------------------------------------------------------------------------------------------------
    //   CustomToast({ message: "Login successful!", type: "success" });
    //   console.log(response);
    //   // localStorage.setItem("pengguna", JSON.stringify(response.data.pengguna));
    //   //navigate to homepage
    //   const token = cookies.get("jwt");
    //   const userRole = await axios.get("http://localhost:3001/user/getRole", {
    //     headers: {
    //       cookies: token,
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   // const userRoleString = userRole.data.data.pengguna.role;
    //   // console.log("Dapet Role nih");
    //   // console.log(userRole.data);
    //   if (userRole.data === "admin") {
    //     // const Cookie = new Cookies();
    //     console.log("Harusnya masuk admin");
    //     navigate("/admin-dashboard");
    //   } else {
    //     console.log("Harusnya masuk user");
    //     navigate("/user-dashboard");
    //   }
    // } catch (error) {
    //   const typedError = error as AxiosError;
    //   const errorMessage =
    //     typedError.response?.data?.message || "Login failed!";
    //   CustomToast({ message: errorMessage, type: "error" });
    // }
  };

  // const handleRegister = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:3001/user/signup", {
  //       username: registerUsername,
  //       email: registerEmail,
  //       password: registerPassword,
  //     });
  //     console.log(response);
  //     CustomToast({ message: "Registration successful!", type: "success" });
  //     // Handle response, possibly auto-login user, etc.
  //   } catch (error) {
  //     const typedError = error as AxiosError;
  //     const errorMessage =
  //       typedError.response?.data?.message || "Registration failed!";
  //     // Log the error if needed
  //     console.error("Registration error", errorMessage);
  //     // Show error toast
  //     CustomToast({ message: errorMessage, type: "error" });
  //   }
  // };

  return (
    <Components.Container>
      <Components.SignUpContainer $signinIn={issignIn}>
        {/* <img
          src="/assets/logo washwiz.svg"
          alt="logo"
          className="absolute top-0 left-0 w-64 h-auto m-8"
        /> */}

        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
            placeholder="Name"
          />
          <Components.Input
            type="email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            placeholder="Email"
          />
          <Components.Input
            type="password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            placeholder="Password"
          />
          {/* <Components.Button onClick={handleRegister}> */}
          <Components.Button>Register</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer $signinIn={issignIn}>
        <Components.Form>
          {/* <img
            src="/assets/logo washwiz.svg"
            alt="logo"
            className="absolute top-0 left-0 w-64 h-auto m-8"
          /> */}

          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="username"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
            placeholder="username"
          />
          <Components.Input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="Password"
          />
          <Components.Button type="submit" onClick={handleLogin}>Login</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer $signinIn={issignIn}>
        <Components.Overlay $signinIn={issignIn}>
          <Components.LeftOverlayPanel $signinIn={issignIn}>
            <Components.Title>Wohoo!</Components.Title>
            <Components.SemiTitle>
              lets clean up you clothes
            </Components.SemiTitle>
            <Components.Paragraph>
              if you already have an account<br></br>
              You can
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel $signinIn={issignIn}>
            <Components.Title>One step closer</Components.Title>
            <Components.SemiTitle>
              to get your clothes done!
            </Components.SemiTitle>
            <Components.Paragraph>
              if you dont have an account<br></br>
              You can
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Register
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default LoginPage;

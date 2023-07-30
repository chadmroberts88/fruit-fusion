import React, { createContext } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { LinkedIn, GitHub, Language } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import styled from "styled-components";
import "@aws-amplify/ui-react/styles.css";
import "../amplify.css";
import awsExports from "../aws-exports";

export const AuthContext = createContext({});
Amplify.configure(awsExports);

const backgroundImage = require("../images/background.png");

const AuthContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  margin-top: 80px;

  @supports (-webkit-touch-callout: none) {
    margin-top: 60px;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 0.75rem;
`;

const iconStyles = {
  color: "#000000",
};

const formFields = {
  signUp: {
    preferred_username: {
      labelHidden: true,
      placeholder: "Player Name (Shown on leaderboard)",
      isRequired: true,
    },
  },
};

const components = {
  Header() {
    return (
      <HeaderContainer>
        <h1>Fruit Fusion</h1>
      </HeaderContainer>
    );
  },

  Footer() {
    return (
      <FooterContainer>
        <Stack alignItems="center" pb={3}>
          <h2>Give it a try!</h2>
          <h3>Email: fruitfusiondemo@gmail.com</h3>
          <h3>Password: @Demo1234</h3>
        </Stack>
        <p>Developed by Chad Roberts.</p>
        <Box>
          <IconButton
            sx={iconStyles}
            href="https://github.com/chadmroberts88"
            target="_blank"
          >
            <GitHub fontSize="inherit" />
          </IconButton>
          <IconButton
            sx={iconStyles}
            href={"https://www.linkedin.com/in/chadmroberts88"}
            target="_blank"
          >
            <LinkedIn fontSize="inherit" />
          </IconButton>
          <IconButton
            sx={iconStyles}
            href={"https://www.chadroberts.ca"}
            target="_blank"
          >
            <Language fontSize="inherit" />
          </IconButton>
        </Box>
      </FooterContainer>
    );
  },
};

const AuthProvider = ({ children }) => {
  return (
    <AuthContainer image={backgroundImage}>
      <Authenticator formFields={formFields} components={components}>
        {({ signOut, user }) => (
          <AuthContext.Provider value={{ signOut, user }}>
            {children}
          </AuthContext.Provider>
        )}
      </Authenticator>
    </AuthContainer>
  );
};

export default AuthProvider;

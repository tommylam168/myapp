import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Authenticator } from '@aws-amplify/ui-react';
import './index.css'
import App from './App.jsx'
import { Amplify } from "aws-amplify";
//import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

//Amplify.configure(outputs);
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-southeast-1_IMypC8CMA",
      userPoolClientId: "2e4u9aonlr082aonpnd8vjb8cg",
      identityPoolId: "ap-southeast-1:60b36cf0-1930-4489-a6af-390b173fa5d5",
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </StrictMode>
)

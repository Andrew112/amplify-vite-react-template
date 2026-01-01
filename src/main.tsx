import "./index.css";
import '@aws-amplify/ui-react/styles.css';

import { Amplify } from "aws-amplify";
import App from "./App.tsx";
import { Authenticator } from '@aws-amplify/ui-react';
import React from "react";
import ReactDOM from "react-dom/client";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);

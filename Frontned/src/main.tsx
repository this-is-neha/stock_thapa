// import React from "react"
// import"./index.css"
// import ReactDOM from 'react-dom/client'
// import "@fortawesome/fontawesome-free/css/all.css"
// import RouterConfig from "./config/router.config";
// import "./index.css"
// import {ChakraProvider} from "@chakra-ui/react"
// import { BrowserRouter } from "react-router-dom";

// const htmlRoot:HTMLElement=document.getElementById('root') as HTMLElement
// const RootElmenet=ReactDOM.createRoot(htmlRoot)
// RootElmenet.render(


// <React.StrictMode>
// <BrowserRouter>

// <ChakraProvider>
//    <RouterConfig>
//    </RouterConfig>
//    </ChakraProvider>

//    </BrowserRouter>
// </React.StrictMode>
// )




import React from "react";
import "./index.css";
import ReactDOM from 'react-dom/client';
import "@fortawesome/fontawesome-free/css/all.css";
import RouterConfig from "./config/router.config";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
const htmlRoot: HTMLElement = document.getElementById('root') as HTMLElement;
const RootElement = ReactDOM.createRoot(htmlRoot);

RootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
  
          <RouterConfig />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

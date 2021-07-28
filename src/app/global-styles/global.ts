import { createGlobalStyle } from 'styled-components'
import { $dark_gray, $light_gray } from '../../shared/styles/colors'

export const GlobalStyles = createGlobalStyle`

  

  * {
    margin: 0;
    padding: 0;

  }
  
  body {
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto Mono', monospace;
  }

  #root {
    height: 100vh;
    background: ${$light_gray};
  
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 0;
    font-weight: 700;
  }

  .add_application_modal .ant-modal-body {
    background: ${$dark_gray};

   
  }

  .add_application_modal .ant-modal-close-x {
    color: #fff;

   
  }

  

  



`

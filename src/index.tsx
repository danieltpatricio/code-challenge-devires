import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from './app/App';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const themeChakra = extendTheme({ ...theme });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={themeChakra}>
          <App />
        </ChakraProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

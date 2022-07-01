import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux 부분 내용 추가
import { Provider } from 'react-redux';
import store from 'modules/store';

// styled-components 부분 내용 추가

import { ThemeProvider } from 'styled-components';
import theme  from './styles/theme';
import GlobalStyle from './styles/global-styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();

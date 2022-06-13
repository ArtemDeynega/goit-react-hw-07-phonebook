import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from 'theme/theme';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { App } from 'components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

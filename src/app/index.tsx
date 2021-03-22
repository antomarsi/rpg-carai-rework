import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './pages/App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

if (process.env.NODE_ENV == 'development' && (module as any).hot) {
  (module as any).hot.accept();
}

<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};
render();
=======
import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import './components/App.sass'

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__)

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/App').default
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE
  )
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './components/App',
      './routes/index',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
>>>>>>> Login Ekranı Yazıldı.

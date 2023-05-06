import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { legacy_createStore as createStore} from 'redux'
import { All } from './Redux/Reducers/AllReducers.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(All)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

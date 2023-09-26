import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './Router'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoutes/>
   {/*<Ejemplo />
    <Verduras />*/}
  </React.StrictMode>,
)

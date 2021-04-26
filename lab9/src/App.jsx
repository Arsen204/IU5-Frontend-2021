import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'

function App() {
  const [userName, setUserName] = useState('')

  return (
    <>
      <Router>
        <Switch>
          <Route path='/lab9/build/' exact>
            <HomePage onSearch={value => setUserName(value)}/>
          </Route>
          <Route path='/lab9/build/user' exact>
            <UserPage userName={userName}/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  )
}

export default App;

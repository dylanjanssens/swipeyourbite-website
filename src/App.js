import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CookiePolicyPage from './pages/cookie-policy'
import Home from './pages/home'
import PrivacyPolicy from './pages/privacy-policy'
import TermsOfServicePage from './pages/terms-of-service'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/privacy-policy" exact>
                    <PrivacyPolicy />
                </Route>
                <Route path="/terms-of-service" exact>
                    <TermsOfServicePage />
                </Route>
                <Route path="/cookie-policy" exact>
                    <CookiePolicyPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App

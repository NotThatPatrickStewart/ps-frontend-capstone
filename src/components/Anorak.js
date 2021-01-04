import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ApplicationViews } from './ApplicationView'
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from './nav/NavBar'
import { Container } from 'react-bootstrap';
import './Anorak.css'
import "./whiskey/Whiskey.css";



export const Anorak = () => (
    <>
        <Route render={() => {
          // The user id is saved under the key app_user_id in local Storage. Change below if needed!
            if (localStorage.getItem("app_user_id")) {
                return (
                    <>
                        <div className="nav__container">
                        <Route render={props => <NavBar {...props} /> } />
                        </div>
                        <div className="main__container">
                        <Container>
                        <Route render={props => <ApplicationViews {...props} /> } />
                        </Container>
                        </div>
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)
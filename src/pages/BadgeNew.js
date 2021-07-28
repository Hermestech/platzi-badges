import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Hermes"
                                lastName="Aguilar"
                                twitter="hermesAdgc"
                                jobTitle="Frontend Engineer"
                                avatarUrl=""
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew
import React, { Component } from 'react'

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container content">
                <div className="text-center mt-5">
                <h1>Oops! Page Not Found</h1>
                <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
			    <a href="#">Back to homepage</a>
                </div>
            </div>
        )
    }
}

export default NotFoundPage;
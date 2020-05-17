import React, { Component } from 'react'

class NotFoundPage extends Component {
    render() {
        return (
            
            <div className="container content">
                <div className="text-center mt-5">
                <h1>Oops! Page Not Found</h1>
                    <div class="row justify-content-center">
                        <div class="col-6">                        
                            <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable</p>
                            {/* <a href="#">Back to homepage</a> */}
                            <a href="#" class="btn btn-primary btn-lg"> <span class="glyphicon glyphicon-arrow-left"></span> back to homepage </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFoundPage;


import React, { Component } from "react";
import ReactTimeAgo from 'react-time-ago'

class RequestResult extends Component {

    render() {
        const { request } = this.props;
        return (

            <div className="card text-center">
                <img className="w-25 image-req" src={`/images/profile/${request.userSender.profile.image}`} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{request.userSender.profile.firstName + " " + request.userSender.profile.lastName}</h5>

                    <div className="mt-1">
                        <div
                            className="btn btn-sm btn-success mr-1"
                            onClick={(e) => {
                                this.props.handelDecisionRequest(request.id, "accepted")
                            }}
                        >
                            <i class="fa fa-check"></i>
                        </div>
                        <div
                            className="btn btn-sm btn-danger mr-1"
                            onClick={(e) => {
                                this.props.handelDecisionRequest(request.id, "declined")
                            }}
                        >
                            <i class="fa fa-trash"></i>

                        </div>

                    </div>


                    <p className="card-text mt-2"><small class="text-muted">
                        <ReactTimeAgo date={request.create_At} locale="en-US" />
                    </small></p>


                </div>

            </div>








        )

    }


}


export default RequestResult

import React from 'react'

const Info = ({match}) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Movie Info</h3>
          </div>
          <div className="panel-body">
            <p><strong>Title:</strong> Overwatch </p>
            <p><strong>Year:</strong> 2017</p>
            <p><strong>Director:</strong> Jeff Kaplan</p>
            <p><strong>Stars:</strong> 5 out of 5 </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Info
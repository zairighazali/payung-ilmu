const subjects = ["Matematik", "Sains", "BM", "English"]

function Services() {
  return (
    <div className="container my-5">
      <div className="row">
        {subjects.map(sub => (
          <div className="col-md-3 mb-3" key={sub}>
            <div className="card text-center shadow-sm service-card">
              <div className="card-body">
                <h5>{sub}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
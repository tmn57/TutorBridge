import React from 'react'

const StudentPage = () => {
  return (
    <>
      <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/hero_1.jpg")' }}>
        <div className="container text-center">
          <h2 className="mb-0">Tìm gia sư nhanh chóng, chất lượng</h2>
        </div>
      </div>
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8 mb-5">
              <form action="#" className="p-5 bg-white">
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label htmlFor="option-price-1">
                      <input type="checkbox" id="option-price-1" /> <span className="text-success">$300</span> For 30 days
                      </label>
                  </div>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label htmlFor="option-price-2">
                      <input type="checkbox" id="option-price-2" /> <span className="text-success">$200</span> / Monthly Recurring
                      </label>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor="fullname">Job Title</label>
                    <input type="text" id="fullname" className="form-control" placeholder="eg. Full Stack Frontend" />
                  </div>
                </div>
                <div className="row form-group mb-5">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor="fullname">Company</label>
                    <input type="text" id="fullname" className="form-control" placeholder="eg. Facebook, Inc." />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12"><h3>Job Type</h3></div>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label htmlFor="option-job-type-1">
                      <input type="radio" id="option-job-type-1" name="job-type" /> Full Time
                      </label>
                  </div>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label htmlFor="option-job-type-2">
                      <input type="radio" id="option-job-type-2" name="job-type" /> Part Time
                      </label>
                  </div>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label htmlFor="option-job-type-3">
                      <input type="radio" id="option-job-type-3" name="job-type" /> Freelance
                      </label></div>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label htmlFor="option-job-type-4">
                      <input type="radio" id="option-job-type-4" name="job-type" /> Internship
                      </label>
                  </div>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label htmlFor="option-job-type-4">
                      <input type="radio" id="option-job-type-4" name="job-type" /> Termporary
                      </label>
                  </div>
                </div>
                <div className="row form-group mb-4">
                  <div className="col-md-12"><h3>Location</h3></div>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <input type="text" className="form-control" placeholder="New York City" />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12"><h3>Job Description</h3></div>
                  <div className="col-md-12 mb-3 mb-md-0">
                    <textarea name className="form-control" id cols={30} rows={5} defaultValue={""} />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input type="submit" defaultValue="Post a Job" className="btn btn-primary  py-2 px-5" />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Contact Info</h3>
                <p className="mb-0 font-weight-bold">Address</p>
                <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>
                <p className="mb-0 font-weight-bold">Phone</p>
                <p className="mb-4"><a href="/#">+1 232 3235 324</a></p>
                <p className="mb-0 font-weight-bold">Email Address</p>
                <p className="mb-0"><a href="/#">youremail@domain.com</a></p>
              </div>
              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">More Info</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur</p>
                <p><a href="/#" className="btn btn-primary  py-2 px-4">Learn More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentPage;
import React from 'react';

const DropdownMenu = () => {
  return (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            One Column <b className="caret" />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">Another action</a>
            </li>
            <li>
              <a href="#">Something else here</a>
            </li>
            <li className="divider" />
            <li>
              <a href="#">Separated link</a>
            </li>
            <li className="divider" />
            <li>
              <a href="#">One more separated link</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            Two Column <b className="caret" />
          </a>
          <ul className="dropdown-menu multi-column columns-2">
            <div className="row">
              <div className="col-sm-6">
                <ul className="multi-column-dropdown">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">
                      Something else here that's extra long so we can see how it
                      looks
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="multi-column-dropdown">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            Three Column <b className="caret" />
          </a>
          <ul className="dropdown-menu multi-column columns-3">
            <div className="row">
              <div className="col-sm-4">
                <ul className="multi-column-dropdown">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="multi-column-dropdown">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="multi-column-dropdown">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;

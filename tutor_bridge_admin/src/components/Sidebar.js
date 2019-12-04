import React from 'react';

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link text-center">
        <h2 className="text-white">
          Tutor<strong className="font-weight-bold">Bridge</strong>
        </h2>
      </a>

      <div className="sidebar" style={{ height: 1000 }}>
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fa fa-th"></i>
                <p>
                  Dashboard
                </p>
              </a>
            </li>
            <li className="nav-header">MANAGEMENT</li>
            <li className="nav-item has-treeview">
              <a href="/#" className="nav-link">
                <i className="nav-icon fa fa-users"></i>
                <p>
                  User Management
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/layout/top-nav.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Top Navigation</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/boxed.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Boxed</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Fixed Sidebar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/fixed-topnav.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Fixed Navbar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/fixed-footer.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Fixed Footer</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Collapsed Sidebar</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar;
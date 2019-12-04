import React from 'react'
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown
} from 'reactstrap'

const Navbar = () => {
    return (
        <nav className="main-header navbar navbar-expand bg-white navbar-light" style={{height: 73}}>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item dropdown'>
                    <UncontrolledDropdown>
                        <DropdownToggle id='btn-user-dropdown' tag='div'>
                            <div className='u-clickable image rounded-circle avatar'>
                                <img style={{width: 50}}
                                    src={
                                        'https://jetsport.com.au/assets/backend/images/default-avatar.png'
                                    }
                                    alt='Avatar'
                                />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem id='lbUserName' header>
                                Phat Vo
                            </DropdownItem>
                            <DropdownItem divider />
                            <a href="/#" className='dropdown-item text-dark'>
                                Setting
                            </a>
                            <DropdownItem divider />
                            <DropdownItem
                                href="/"
                                id='btn-logout'
                                // onClick={this._logout}
                                className='u-clickable'
                            >
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

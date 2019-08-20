import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const GuestNavigationBar = (props) => {
  const {
    className2,
    children,
  } = props;

  return (

    <div>
      <div className="index_nav_div_container">
        <div className="index_nav_div">
          <div className="left_nav_items">
            <ul>
              <li>
                <Link
                  to="/"
                >
                Home
                </Link>
              </li>
              <li>
                <Link
                  to="/invest"
                >
                Invest
                </Link>
              </li>

              <li>
                <Link to="/save">
                Save
                </Link>
              </li>

              <li>
                <Link to="/learn">
                Learn
                </Link>
              </li>

              <li>
                <Link to="/goals">
                Goals
                </Link>
              </li>
            </ul>

          </div>
          <div className="right_nav_items">

            <ul>
              <li>
                <Link to="login">
                Login
                </Link>
              </li>

              <li>
                <Link to="/signup" className="register_link">
                Create free account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="open_nav_btn">
        <span className="sideNavBtnOpen">&#9776;</span>
      </div>
      <div className={className2}>
        {children}
      </div>
    </div>
  );
};

GuestNavigationBar.propTypes = {
  className2: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.any]))
};

export default GuestNavigationBar;

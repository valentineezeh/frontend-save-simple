import React from 'react';

const GuestMobileNavigation = () => (
  <div className="mobile_nav_div_container">
    <div className="close_nav_btn">
      <span>&times;</span>
    </div>
    <div className="mobile_nav_links">
      <ul>
        <li>
          <a href="/">
                      Home
          </a>
        </li>
        <li>
          <a href="/invest">
                          Invest
          </a>
        </li>

        <li>
          <a href="/save">
                          Save
          </a>
        </li>

        <li>
          <a href="/learn">
                          Learn
          </a>
        </li>

        <li>
          <a href="/goals">
                          Goals
          </a>
        </li>
        <li>
          <a href="/login">
                Log In
          </a>
        </li>
        <li>
          <a href="/signup">
            Create Account
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default GuestMobileNavigation;

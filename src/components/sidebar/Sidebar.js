import React from "react";
import profileImage from "../../assets/images/users.jpg";
import logo from "../../assets/images/logo-png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faAddressBook,
  faCartShopping,
  faEnvelope,
  faListCheck,
  faBell,
  faBars,
  faChartLine,
  faCirclePlus,
  faEllipsisVertical,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import Card from './../card/Card';
const Sidebar = () => {
  return (
    <>
      <input type="checkbox" name="" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-flex">
            <img src={logo} alt="img" width="20px" height="20px" />
          </div>
        </div>

        <div className="sidebar-main">
          <div className="sidebar-user">
            <img src={profileImage} alt="img" width="120px" height="120px" />
            <div>
              <h3>Akash Patel</h3>
              <span>akash9753@gmail.com</span>
              <div>User</div>
              <div>
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "1rem" }}
                  />
                </span>
                <span>
                  <FontAwesomeIcon icon={faBell} />
                </span>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                <a href="">
                  <span className="las la-balance-scale">
                    <FontAwesomeIcon icon={faCalendarDays} /> Dashboard
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="las la-chart-pie">
                    <FontAwesomeIcon icon={faAddressBook} /> Team
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="las la-balance-scale">
                    <FontAwesomeIcon icon={faCartShopping} /> Movies
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="las la-chart-pie">
                    <FontAwesomeIcon icon={faEnvelope} /> Events
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="las la-chart-pie">
                    <FontAwesomeIcon icon={faListCheck} /> Tasks
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="las la-chart-pie">
                    <FontAwesomeIcon icon={faListCheck} /> Documentation
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-content">
        <header>
          <div className="menu-toggle">
            <label for="sidebar-toggle">
              <span>
                <FontAwesomeIcon icon={faBars} />
              </span>
            </label>
          </div>
          <div className="header-icons">
          <span className="">
          <FontAwesomeIcon icon={faCalendarDays} />
            </span>
            <span className="">
              June 26
            </span>
          </div>
        </header>
        <main>
          <div className="page-header">
            <div>
              <h1>Welcome!</h1>
            </div>

            <div className="header-actions">
              <div>
                <FontAwesomeIcon icon={faCirclePlus} className="plus_Icon" />
              </div>
            </div>
          </div>
          <div className="cards">
          <Card title={"Show Booking"} numbers={"17582"} status={"2% less Booking"}/>
          <Card title={"Show Booking"} numbers={"17582"} status={"2% less Booking"}/>
          <Card title={"Show Booking"} numbers={"17582"} status={"2% less Booking"}/>
          <Card title={"Show Booking"} numbers={"17582"} status={"2% less Booking"}/>
          </div>
          <div className="movies-grid">
            <div className="movie-booking-detail-card">
              <h2>
                Ticktes{" "}
                <small>
                  See all ticketes{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </small>
              </h2>
              <div className="table-responsive">
                <table width="95%">
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <span className="indicator"></span>
                        </div>
                      </td>
                      <td>
                        <div>3 Ticktes for movie 123</div>
                      </td>
                      <td>
                        <div>Booked by akash Patel</div>
                      </td>
                      <td>
                        <div>
                          <button>3 Tickets</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="indicator even"></span>
                        </div>
                      </td>
                      <td>
                        <div>3 Ticktes for movie 123</div>
                      </td>
                      <td>
                        <div>Booked by akash Patel</div>
                      </td>
                      <td>
                        <div>
                          <button>3 Tickets</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="indicator"></span>
                        </div>
                      </td>
                      <td>
                        <div>3 Ticktes for movie 123</div>
                      </td>
                      <td>
                        <div>Booked by akash Patel</div>
                      </td>
                      <td>
                        <div>
                          <button>3 Tickets</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="indicator even"></span>
                        </div>
                      </td>
                      <td>
                        <div>3 Ticktes for movie 123</div>
                      </td>
                      <td>
                        <div>Booked by akash Patel</div>
                      </td>
                      <td>
                        <div>
                          <button>3 Tickets</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <span className="indicator"></span>
                        </div>
                      </td>
                      <td>
                        <div>3 Ticktes for movie 123</div>
                      </td>
                      <td>
                        <div>Booked by akash Patel</div>
                      </td>
                      <td>
                        <div>
                          <button>3 Tickets</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="analytics-card">
              <div className="analytics-head">
                <h2>Action nedded</h2>
                <span className="">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </span>
              </div>

              <div className="analytics-chart">
                <div className="chart-circle">
                  <h1>74%</h1>
                </div>
              </div>

              <div className="analytics-note">
                <small>
                  Note : Current sprint requires stackholders meeting to reach
                  conclusion
                </small>
              </div>

              <div className="analytics-btn">
                <button>Generate Report</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Sidebar;

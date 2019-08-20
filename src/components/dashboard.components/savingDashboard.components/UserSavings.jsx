/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import fetchSavingPlans from '../../../actions/savings.actions/getSavingPlans';
import {
  UserOnTrackSavings,
  UserNotOnTrackSavings
} from '../../commons/index';


/**
 * @class UserSavings
 */
class UserSavings extends Component {
  state = {
    currentPage: 1,
    pageLimit: 6,
    search: ''
  }

  /**
   *
   * @param {*} event
   * @returns {*} - handle click event
   */
  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

/**
   *
   * @param {*} event
   * @returns {*} - handle search event
   */
  updateSearch = (event) => {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const {
      currentPage,
      pageLimit,
      search
    } = this.state;

    const { allSavings } = this.props;

    // Set out first and last index
    const indexOfLastSaving = currentPage * pageLimit;
    const indexOfFirstSaving = indexOfLastSaving - pageLimit;

    // create new array of object
    const currentSavings = allSavings.slice(indexOfFirstSaving, indexOfLastSaving);

    // Logic to filter by search
    const bySearch = allSavings.filter(
      searchParams => searchParams.planName.toLowerCase().indexOf(search) !== -1
    );

    // Main saving payload
    const mainSavingContent = search ? bySearch : currentSavings;

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allSavings.length / pageLimit); i++) {
      pageNumbers.push(i);
    }

    // Pagination
    const renderPageNumbers = pageNumbers.map(number => (
      <li
        key={number}
        className={`pageRemake ${currentPage === number ? 'active' : ''
        }`}
        id={number}
        onClick={this.handleClick}
      >
        <>
          {number}
        </>
      </li>
    ));

    const userSavings = (
      <section className="body_space">
        <div className="investment_upper_part">
          <div className="investment_upper_part_title">
            <div className="first_child">
              <h4>
                My savings
              </h4>
              <p>
               Select your savings plan of interest
              </p>
            </div>
            <div className="second_child">
              <div className="second_child_icon main">
                <i className="fas fa-search main" />
              </div>
              <div className="second_child_input main">
                <input
                  type="text"
                  value={search}
                  id=""
                  onChange={this.updateSearch}
                  placeholder="Search...."
                />
              </div>
              <div className="second_child_filter main my_savinngs_header_addNewLink">

                <p>
                  <Link to="/savings-plan">
                    <span>
                            +
                    </span>
                        Add new
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="savings_plan_for_interest">
          {
                isEmpty(allSavings) ? (
                  <div className="text-center">
                    <Loader
                      type="Circles"
                      color="#00C177"
                      height="100"
                      width="100"
                    />
                  </div>
                ) : (
                  mainSavingContent.map(savings => (
                    savings.status === 'Active' ? (
                      (
                        <UserOnTrackSavings
                          key={savings.id}
                          title={savings.planName}
                          planType={savings.planType}
                          amountSaved={savings.amountSaved}
                          amountAccrued={savings.amountAccrued}
                          totalInterestEarned={savings.totalInterestEarned}
                          id={savings.id}
                        />
                      )
                    ) : (
                      <UserNotOnTrackSavings
                        title={savings.planName}
                        planType={savings.planType}
                        id={savings.id}
                      />
                    )
                  ))
                )
            }
        </div>
        {
          search ? '' : (
            <div className="table_pagination">
              <ul className="pagination justify-content-center">
                {renderPageNumbers}
              </ul>
            </div>
          )
        }
      </section>
    );
    return <>{userSavings}</>;
  }
}

UserSavings.propTypes = {
  userSavingsList: PropTypes.shape({}),
  allSavings: PropTypes.any
};

const mapStateToProps = state => ({
  userSavingsList: state.getUserSavingPlans.savingPlans
});

export default connect(mapStateToProps, {
  FetchSavingPlans: fetchSavingPlans
})(UserSavings);

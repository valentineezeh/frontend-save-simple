import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sortable } from 'react-sortable';

/**
 * @class ContributoryEmailList
 */
class ContributoryEmailList extends Component {
  /**
   *
   * @returns {*} - state
   */
  render() {
    const { userEmail, position } = this.props;
    console.log('===>: ', userEmail, position);
    return (
      <>
        <div className="invite_members">
          <div>
            <p>
              { userEmail }
            </p>
          </div>
          <div>
            <button type="button"
              name="removeEmail"
              value={userEmail}
              // onClick={this.onDeleteEmail}
            >
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      </>
    );
  }
}

ContributoryEmailList.propTypes = {
  userEmail: PropTypes.string,
  position: PropTypes.number
};

const SortableItem = sortable(ContributoryEmailList);

export default SortableItem;

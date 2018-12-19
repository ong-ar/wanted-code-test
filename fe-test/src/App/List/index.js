import React, { Component } from 'react';

class List extends Component {
  render() {
    const {
      listData = [],
    } = this.props;

    return(
      <div>
        List
      </div>
    );
  }
}

export default List;

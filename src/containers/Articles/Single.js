import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Articles/Single';

class ArticlesSingleContainer extends Component {
  constructor() {
    super();
    this.state = { loading: false, error: null, article: {}, id: 0, title: '' };
  }

  componentDidMount = () => this.fetchData();

  /**
   * Fetch Data
   */
  fetchData = async () => {
    const { fetchData, id, title } = this.props;

    this.setState({ loading: true, error: null });

    try {
      const article = await fetchData(id);
      this.setState({ loading: false, error: null, article: article, id: id, title: title });
    } catch (err) {
      this.setState({ loading: false, error: err.message, article: {}, id: id, title: title });
    }
  };

  /**
   * Render
   */
  render = () => {
    const { loading, error, article, id, title } = this.state;

    return (
      <Layout
        loading={loading}
        error={error}
        article={article}
        reFetch={this.fetchData}
        id={id}
        title={title}
      />
    );
  };
}

ArticlesSingleContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

ArticlesSingleContainer.defaultProps = {
  id: null,
  title: '',
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchData: dispatch.articles.fetchSingle,
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesSingleContainer);

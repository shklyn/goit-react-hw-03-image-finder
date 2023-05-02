import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  HeaderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
  state = {
    request: '',
  };

  setSearchValue = e => {
    this.setState({ request: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.request);
  }

  render() {
    return (
      <HeaderSearchbar>
        <SearchForm
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <SearchFormButton type="submit">
            <FaSearch style={{ width: '20px', height: '20px' }} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.setSearchValue}
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

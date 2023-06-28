import PropTypes from 'prop-types';
import { Box } from 'components';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { FormStyled, Input, Button } from './Form.styled';

export const Form = ({ onSubmit }) => {
  const [searchedValue, setSearchedValue] = useState('');

  const handleSearch = evt => {
    setSearchedValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const query = searchedValue.trim().toLowerCase();
    if (!query) return;

    onSubmit(query);
    setSearchedValue('');
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <Box position="relative" width={335}>
        <Button>
          <BsSearch size={16} />
        </Button>
        <Input
          type="text"
          autoComplete="off"
          placeholder="Search movies"
          value={searchedValue}
          onChange={handleSearch}
        />
      </Box>
    </FormStyled>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

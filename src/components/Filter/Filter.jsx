import { InputFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterCjange = e => dispatch(filterContacts(e.target.value));
  return (
    <>
      <InputFilter
        type="text"
        value={filterValue}
        onChange={filterCjange}
        placeholder="Enter name"
      />
    </>
  );
};

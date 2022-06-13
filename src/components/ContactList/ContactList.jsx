import { InputLabel, Item } from './ContactList.styled';
import { ContactListItem } from './ContactListItem';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { Filter } from 'components/Filter/Filter';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filterSlice';

export const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const filteredContacts = useMemo(() => {
    return (
      data?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [data, filter]);

  return (
    <>
      <InputLabel>Find contacts by name</InputLabel>
      <Item>
        <Filter />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          filteredContacts.map(({ name, phone, id }) => (
            <ContactListItem key={id} id={id} name={name} phone={phone} />
          ))
        )}
      </Item>
    </>
  );
};

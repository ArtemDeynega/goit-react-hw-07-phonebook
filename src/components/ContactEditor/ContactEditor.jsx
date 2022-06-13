import { Form, Label, Input, Button } from './ContactEditor.styled';
import { toast } from 'react-toastify';
import shortid from 'shortid';
import { useAddContactMutation } from 'redux/contacts/contactsSlice';
import { useState } from 'react';

const initialState = {
  name: '',
  phone: '',
};
export const ContactEditor = () => {
  const [contatsState, setContatsState] = useState(initialState);
  const [addContact] = useAddContactMutation();

  const handleChange = ({ target }) => {
    setContatsState({
      ...contatsState,
      [target.name]: target.value.trim(),
    });
  };

  const handleAddContact = async values => {
    values.preventDefault();
    try {
      const newContacts = {
        ...contatsState,
        id: shortid.generate(),
      };
      await addContact(newContacts);
      toast.success('Конатакт добавлен');
      setContatsState(initialState);
    } catch (error) {
      toast.error('Что то пошло не так');
      console.log(error.message);
    }
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleAddContact}>
        <Label htmlFor={'name'}>
          Name
          <Input
            type="text"
            name="name"
            value={contatsState.name}
            onChange={handleChange}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={'phone'}>
          Phone
          <Input
            type="tel"
            name="phone"
            value={contatsState.phone}
            placeholder="Enter phone"
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

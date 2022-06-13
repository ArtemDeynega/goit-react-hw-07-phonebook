import { ListItem, Button } from './ContactListItem.styled';
import { useDeleteContactsMutation } from 'redux/contacts/contactsSlice';
export const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, results] = useDeleteContactsMutation();
  return (
    <>
      <ListItem>
        {name && (
          <>
            {name} : {phone}
            <Button
              type="button"
              onClick={() => deleteContact(id)}
              disabled={results.isLoading}
            >
              Delete
            </Button>
          </>
        )}
      </ListItem>
    </>
  );
};

import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from 'Styles/GlobalStyles/GlobalStyles';
import { ContactList } from 'components/ContactList';
import { ContactEditor } from 'components/ContactEditor';
import { SectionTitle } from 'components/Title';
export const App = () => {
  return (
    <>
      <SectionTitle title="Phonebook">
        <ContactEditor />
      </SectionTitle>
      <SectionTitle title="Contacts">
        <ContactList />
      </SectionTitle>
      <GlobalStyles />
      <ToastContainer />
    </>
  );
};

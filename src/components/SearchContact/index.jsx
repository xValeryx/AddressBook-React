import styles from './index.css';

const SearchContact = ({setSearchContact, searchContact}) => {
    
  return (
    <div className={styles.input}>
      <form>
      <label htmlFor="searchbar">Search by name or last name</label>
        <input
          type="text"
          value={searchContact}
          onChange={(e) => setSearchContact(e.target.value)}
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default SearchContact;
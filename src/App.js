import './App.css';

// Uncomment untuk memuat daftar kontak
import Header from './components/Header';
import Contact from './components/Contact';
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <Contact contact={contacts[0]} />
      <Contact contact={contacts[1]} />
      <Contact contact={contacts[2]} />
      <Contact contact={contacts[3]} />
      <Contact contact={contacts[4]} />
      <Contact contact={contacts[5]} />
    </div>
  );
}

export default App;

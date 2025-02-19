import './App.css';
import { Greet } from './Greet';
import { Person } from './Person';
import { Status } from './Stat';


function App() {
  const personName = {
    first: 'Sachin',
    last: 'Borade',
  }
  return (
    <div className="App">
      <Greet name='Sachin' messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <Status status='askldjfh' />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  console.log(persons)
  return (
    <div>
      <h1>Phonebook</h1>
    </div>
  );
}

export default App

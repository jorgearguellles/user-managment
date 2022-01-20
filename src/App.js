import { useState } from 'react';
import { Card } from './components/Card';
import { Container } from './components/Container';
import { UserForm } from './components/UserForm';

import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  
  const submit = (user) => {
    setUsers([
      ...users,
      user
    ])
  }

  // console.log(users)
  return (
    <Container>
      <Card>  
        <UserForm submit={submit}/>
      </Card>
      <Card>
        {
          users.map(user => {
            return(
              <li key={user.email}>
                {`${user.name} ${user.lastName} ${user.email}`}
              </li>
            )
          })
        }
      </Card>
    </Container>
  );
}

export default App;

import { Button } from './Button';
import { Input } from './Input';
import {useForm} from '../hooks/useForm' ;

const UserForm = ({submit}) => {

  const [formData, handleChange, reset] = useForm({
    name:'',
    lastName:'',
    email:'',
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formData)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label="Name"
        name="name"
        placeholder='Name'
        onChange={handleChange}
        value={formData.name}
        />
      <Input 
        label="Last Name"
        name="lastName"
        placeholder='Last Name'
        onChange={handleChange}
        value={formData.lastName}
        />
      <Input 
        label="Email"
        name="email"
        placeholder='Email'
        onChange={handleChange}
        value={formData.email}
      />
      <Button>Send</Button>
    </form>
  )
};

export {UserForm};
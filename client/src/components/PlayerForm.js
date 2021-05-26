import React, {useState} from 'react';
import { Form, Label, FormGroup, Input, Button } from '../styles/Style';

export default props => {
  const  {newPlayer, setNewPlayer, onSubmitProp } = props;
  const [ name, setName ] = useState("");
  const [ position, setPosition ] = useState("");
  const [ game1, setGame1 ] = useState(0);
  const [ game2, setGame2 ] = useState(0);
  const [ game3, setGame3 ] = useState(0);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      name,
      position,
      game1,
      game2,
      game3
    })
  }

  return (
    <div>
      <Form onSubmit = { onSubmitHandler }>
        <FormGroup>
          <Label>Name:</Label>
          <Input type = "text" onChange = { (e) => setName(e.target.value) }/>
        </FormGroup>
        <FormGroup>
          <Label>Position:</Label>
          <Input type = "text" onChange = { (e) => setPosition(e.target.value) }/>
        </FormGroup>
        <Button type = "submit">Submit</Button>
      </Form>
    </div>
  )
}
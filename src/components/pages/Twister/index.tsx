import React, { FunctionComponent } from 'react';
import { Button, Card } from 'semantic-ui-react'
import Dictaphone from '../../commons/Dictaphone';

const Twister: FunctionComponent = () => {
  return (
    <Card.Group centered>
      <Card>
        <Card.Content>
          <Card.Header>Twister word</Card.Header>
          <Card.Meta>Thai</Card.Meta>
          <Card.Description>
            ยายกินลำไยน้ำลายยายไหลย้อย
          </Card.Description>
          <div className='ui two buttons'>
            <Dictaphone />
          </div>
        </Card.Content>
      </Card>
  </Card.Group>
  );
};

export default Twister;

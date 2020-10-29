import React, { FunctionComponent } from 'react';
import { Card } from 'semantic-ui-react'

const Twister: FunctionComponent = () => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header>Twister word</Card.Header>
          <Card.Meta>Thai</Card.Meta>
          <Card.Description>
            ยายกินลำไยน้ำลายยายไหลย้อย
          </Card.Description>
        </Card.Content>
      </Card>
  </Card.Group>
  );
};

export default Twister;

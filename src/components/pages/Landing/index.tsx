import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Header, Image } from 'semantic-ui-react'

const Landing: FunctionComponent = () => {
  return (
    <Container textAlign='center'>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Image src='toungetwisters.jpg' size='medium' wrapped />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as='h1'>Tounge Twisters</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Link to='/twister'>
                <Button content='Secondary' secondary >Start</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
  );
};

export default Landing;

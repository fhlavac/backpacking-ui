import {
  Bullseye, Button, Card, CardBody, CardFooter, CardTitle,
} from '@patternfly/react-core';
import React from 'react';
import propTypes from 'prop-types';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
import { API_SERVER_URL } from '../config/config';
import IconWeight from './icons/icon-weight';
import './GearItem.scss';

const GearItem = ({ item, onAdd, onRemove }) => (
  <Card className="app-c-card-gear-item">
    <CardTitle headingLevel="h1" size="xl" className="app-c-card-gear-item__title pf-u-text-align-center pf-u-p-md">{item.name}</CardTitle>
    <CardBody className="app-c-card-gear-item__body">
      <Bullseye>
        <img src={`${API_SERVER_URL}/sample.png`} alt={item.name} />
      </Bullseye>
    </CardBody>
    <CardBody className="app-c-card-gear-item__body">
      <div className="icon-weight">
        <IconWeight />
        <b>1690g</b>
      </div>
      <p className="description pf-u-text-align-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </CardBody>
    <CardFooter className="pf-u-p-xs app-c-card-gear-item__footer">
      { /* TODO - display only appropriate button acccording to redux state */ }
      <Button variant="link" isSmall onClick={() => onRemove(item.id)}><TrashIcon /></Button>
      <Button variant="link" isSmall onClick={() => onAdd(item)} className="pf-u-float-right">Add to backpack</Button>
    </CardFooter>
  </Card>
);

GearItem.propTypes = {
  item: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
  }).isRequired,
  onAdd: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};

export default GearItem;

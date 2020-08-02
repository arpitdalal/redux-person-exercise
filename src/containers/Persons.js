import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../store/action';

import AddPerson from '../components/AddPerson/AddPerson';
import Person from '../components/Person/Person';
import Input from '../components/Input/Input';

class Persons extends Component {
  render() {
    return (
      <div>
        <Input name='name' placeholder='Name' onChange={(e) => this.props.onAddName(e.target.value)} />
        <Input name='age' placeholder='Age' onChange={(e) => this.props.onAddAge(e.target.value)} />
        <AddPerson personAdded={() => this.props.onAddPerson({ name: this.props.name, age: this.props.age })} />
        {(this.props.persons || []).map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => {
              this.props.onRemovePerson(person.id);
            }}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.action.persons,
    name: state.input.name,
    age: state.input.age
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: (person) => dispatch({ type: actionType.ADD_PERSON, value: person }),
    onRemovePerson: (person) => dispatch({ type: actionType.REM_PERSON, value: person }),
    onAddName: (name) => dispatch({ type: actionType.ADD_NAME, value: name }),
    onAddAge: (age) => dispatch({ type: actionType.ADD_AGE, value: age })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

import React, { useState } from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';

 


export default function Profile() {
  const [notes, setNotes] = useState('');
  
  const employee = {
    ID: 1,
    FirstName: 'Elchin',
    LastName: 'Mammadov',
    Prefix: 'Mr.',
    Position: 'Junior developer',
	Picture: 'elcin.jpeg',
    BirthDate: new Date('2004/03/20'),
	HireDate: new Date('2021/11/11'),
    Notes: notes,
    Address: 'Baku city.'
  };

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Profile</h2>

      
        <div className={'form-avatar'}>
  <img src={"elcin.jpeg"} alt={"Elchin"} />

      </div>

      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={employee}
          onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        />
      </div>
    </React.Fragment>
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};

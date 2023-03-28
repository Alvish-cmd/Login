import React, { useEffect } from 'react';
import './DataTable.css';

function DataTable(props) {

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Contact No.</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        {props.data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
            <td><button id='edit' >Edit</button><button id='delete' >Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
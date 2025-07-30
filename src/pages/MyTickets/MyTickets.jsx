import React from 'react';
import './MyTickets.scss';

const dummyTickets = [
  {
    id: 'TCK-001',
    subject: 'Unable to login',
    status: 'Open',
    created: '2025-07-25',
    category: 'Account',
  },
  {
    id: 'TCK-002',
    subject: 'Billing discrepancy',
    status: 'Closed',
    created: '2025-07-20',
    category: 'Billing',
  },
  {
    id: 'TCK-003',
    subject: 'Feature request: Dark mode',
    status: 'In Progress',
    created: '2025-07-18',
    category: 'Other',
  },
];

const statusColors = {
  Open: '#2d6cdf',
  'In Progress': '#f1c40f',
  Closed: '#27ae60',
};

const MyTickets = () => (
  <div className="my-tickets-page">
    <h2>My Tickets</h2>
    <div className="tickets-table-wrapper">
      <table className="tickets-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Category</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {dummyTickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.category}</td>
              <td>
                <span style={{ color: statusColors[ticket.status], fontWeight: 600 }}>
                  {ticket.status}
                </span>
              </td>
              <td>{ticket.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
export default MyTickets;

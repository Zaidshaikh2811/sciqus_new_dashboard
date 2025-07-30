import React from 'react';
import './Proposal.scss';
import { Eye } from 'lucide-react';

const dummyProposals = [
	{
		id: 'PRP-001',
		created: '2025-07-10',
		description: 'Annual maintenance contract for software',
		validity: '2025-08-10',
		amount: 1200,
	},
	{
		id: 'PRP-002',
		created: '2025-07-15',
		description: 'Upgrade to premium support',
		validity: '2025-08-15',
		amount: 500,
	},
	{
		id: 'PRP-003',
		created: '2025-07-20',
		description: 'Custom integration proposal',
		validity: '2025-08-20',
		amount: 2000,
	},
];

const Proposal = () => (
	<div className="proposal-page">
		<h2>Proposals</h2>
		<div className="proposal-table-wrapper">
			<table className="proposal-table">
				<thead>
					<tr>
						<th>Created On</th>
						<th>Proposal ID</th>
						<th>Short Description</th>
						<th>Validity</th>
						<th>Amount (₹)</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody>
					{dummyProposals.map((proposal) => (
						<tr key={proposal.id}>
							<td>{proposal.created}</td>
							<td>{proposal.id}</td>
							<td>{proposal.description}</td>
							<td>{proposal.validity}</td>
							<td>{proposal.amount}</td>
							<td>
								<button
									className="view-btn"
									title="View"
								>
									<Eye size={18} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
);
export default Proposal;

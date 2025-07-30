import React from 'react';
import './Catalog.scss';

const dummyCatalog = [
	{
		id: 'CAT-001',
		name: 'Premium Support',
		description: '24/7 support for all your needs',
		price: 299,
		available: true,
	},
	{
		id: 'CAT-002',
		name: 'Cloud Storage',
		description: '1TB secure cloud storage',
		price: 99,
		available: false,
	},
	{
		id: 'CAT-003',
		name: 'Custom Integration',
		description: 'Integrate with your favorite tools',
		price: 499,
		available: true,
	},
];

const Catalog = () => (
	<div className="catalog-page">
		<h2>Catalog</h2>
		<div className="catalog-table-wrapper">
			<table className="catalog-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Description</th>
						<th>Price ($)</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{dummyCatalog.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.description}</td>
							<td>{item.price}</td>
							<td>
								<span className={item.available ? 'available' : 'unavailable'}>
									{item.available ? 'Available' : 'Unavailable'}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
);
export default Catalog;

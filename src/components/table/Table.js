import React from 'react';

const Table = () => {
	return (
		<div>
			<table className="striped">
				<thead>
					<tr>
						<th>Country</th>
						<th>Fire emergency</th>
						<th>police emergency</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Alvin</td>
						<td>Eclair</td>
						<td>$0.87</td>
					</tr>
					<tr>
						<td>Alan</td>
						<td>Jellybean</td>
						<td>$3.76</td>
					</tr>
					<tr>
						<td>Jonathan</td>
						<td>Lollipop</td>
						<td>$7.00</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;

import React, { useEffect, useState }              from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({events}) => {
	const [ data, setData ] = useState([]);
	const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
	useEffect(() => { setData(() => getData());}, [events]);


	const getData = () => {
		const genres = ['React', 'Javascript', 'Node', 'AngularJS'];
		const data = genres.map((genre) => {
			const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
			return { name: genre, value: value};
		});
	return data;

	};


	return (
		<ResponsiveContainer height={400} >
			<PieChart width={400} height={400}>
				<Pie
					data={data}
					cx={200}
					cy={200}
					labelLine={false}
					innerRadius={80}
					dataKey="value"
					fill="#8884d8"
					label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} >
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
					))}
				</Pie>
				<Legend layout="horizontal" verticalAlign="top" align="center" height={45} />
			</PieChart>
		</ResponsiveContainer>
	);
};

export default EventGenre;

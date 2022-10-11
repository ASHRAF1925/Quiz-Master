import React from 'react';
import { useLoaderData } from 'react-router';
import { LineChart, Line,BarChart,XAxis,YAxis,Bar } from 'recharts';

const Statistics = () => {
    
    const topics=useLoaderData();
    console.log(topics.data)
    
    return (
        <div>
            <h1>This is statistics about the Questions Avialable</h1>
 
  
  <BarChart className='mx-auto my-5' width={600} height={300} data={topics.data}>
    <XAxis dataKey="name"  />
    <YAxis />
    <Bar dataKey="total" barSize={30} fill="#8884d8"
    />
  </BarChart>
        </div>
    );
};

export default Statistics;
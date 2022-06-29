import React, {useEffect, useState} from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import instance from './axios'


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// const data = {
//   labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [2, 9, 3, 5, 2, 3],
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgba(255, 99, 132, 1)',
//       borderWidth: 1,
//     },
//   ],
// };


function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    // console.log('seomtksjfs')
    // (async () => {
    //   console.log('inside')
    //   // const data = await instance.get('/')
    //   // console.log('my data kfjslkfjasfd',data)

    // })()
    asyncFunction()
  }, [])

  const asyncFunction = async ( ) => {
    const rawData = await instance.get('/')
    const data = rawData.data
    setData(data)
  }

  return (
    <React.Fragment>{!data && <p>Loading...</p>}{data && <Radar data={data} />}</React.Fragment>
  )
}

export default App




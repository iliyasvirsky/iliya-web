import React from 'react';
import { Link } from 'react-router-dom';

import { Polar } from 'react-chartjs-2';
import Modal from 'react-bootstrap/lib/Modal';

const dataFontEnd = {
  datasets: [{
    data: [
      3,
      26,
      14,
      24,
      16,
      26
    ],
    backgroundColor: [
      '#FF6384',
      '#00abf1',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'Month Working With' // for legend
  }],
  labels: [
    'Angluar',
    'React',
    'VueJS',
    'HTML',
    'jQuary',
    'CSS',

  ]
}
const dataBackend = {
  datasets: [{
    data: [
      6,
      12,
      15
    ],
    backgroundColor: [
      '#FF6384',
      '#00abf1',
      '#4BC0C0'
    ],
    label: 'Month Working With' // for legend
  }],
  labels: [
    'Node Hapi',
    'Python',
    'Node Express'
  ]
}
class WorkChart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //------------------------------------------------------------------------------------------------------------------------------------
    return (
      <div>
        <div className="row">
          <div className="col-md-5 align-middle pt-5">
            <div className="display-3 align-middle text-center text-white pt-5 p-5">
              Front End Tech Stack
            </div>
            <p className="display-4 align-middle text-center text-white pt-5 p-5">
            worked with a lot of frameworks sometimes at the same time. I personaly love React the most but Vue defintly comes as a close second
            </p>
          </div>
          <div className="col-md-5 pt-5">
            <Polar
                className="pt-5 p-5"
                width={window.outerWidth*.30}
                height={500}
                data={dataFontEnd}
                />
            <h1 className="text-white text-center pt-5 p-5">
              Month Working with Frameworks
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 align-middle pt-5">
            <div className="display-3 align-middle text-center text-white pt-5 p-5">
              Back End Tech Stack
            </div>
          </div>
          <div className="col-md-5 pt-5">
            <Polar
                className="pt-5 p-5"
                width={window.outerWidth*.30}
                height={500}
                data={dataBackend}
                />
            <h1 className="text-white text-center pt-5 p-5">
              Month Working with Frameworks
            </h1>
          </div>
        </div>
        </div>
      );
    }
}

export default WorkChart;

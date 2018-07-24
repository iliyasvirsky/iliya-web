import React from 'react';
import { Loader } from 'semantic-ui-react';
import ReactDelayRender from 'react-delay-render';
import ReactLoading from 'react-loading';
import Night_Skyline from '../images/Night_Skyline.jpg'




class Loading extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    //------------------------------------------------------------------------------------------------------------------------------------
    const loadingStyle = {
      margin: 'auto',
      width: '50%',
      padding: '10px'
    }
    const page = {
      backgroundImage: 'url(' + Night_Skyline + ')',
      backgroundSize: 'cover',
      height: '100%',
      minHeight: window.outerHeight+300
    }
    return (
      <div className="page" style={page}>
        <ReactLoading style={loadingStyle} type="cylon" color="#0072a6" height={500} width={375} />
      </div>
    );
  }
}
export default ReactDelayRender({ delay: 300 })(Loading);

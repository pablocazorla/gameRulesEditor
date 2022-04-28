import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'rdx/actions';

import {
  Card
} from 'react-bootstrap';

class UploadVisual extends Component {

  // componentWillReceiveProps (nextProps) {
  // }
  //componentDidMount(){
  //}
  fileInput = React.createRef()
  changeFileInput = () => {
    if(this.fileInput && this.fileInput.current && this.fileInput.current.files && this.fileInput.current.files[0] && ["application/pdf"].indexOf(this.fileInput.current.files[0].type) >= 0){
      
      const file = this.fileInput.current.files[0];
      const name = file.name;
      
      this.props.uploadFile(name,file);
      
    }
  }
  render() {
    const {name} = this.props;

    console.log(name);


    return <div className="upload">
      <Card>
        <Card.Body>
          <div className="uploader-btn">
            <input type="file" id="input-file" className="input-file"  accept="application/pdf" 
            onChange={this.changeFileInput}
            ref={this.fileInput}/>
            <label htmlFor="input-file" className="button">          
             Choose PDF
            </label>
          </div>
        </Card.Body>        
      </Card>
    </div>;
    
    
  }
};

/* REDUX ***************************/

const {  
  uploadFile
} = actions;

function mapStateToProps(state) {
  const {name} = state;
  return {name};
}
const mapDispatchToProps = dispatch => {
	return {
    uploadFile: (name,file) => {
      dispatch(uploadFile(name,file))
    }
	}
}

const Upload = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadVisual);

export default Upload;
import React from 'react';
import { InputGroup, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Jumbotron, Col,Row
  } from 'reactstrap';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import { Redirect } from 'react-router';

class InfoListPage extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
        redirect: false,
        selectedFile: null 
        };
    };
    handleButton = () => {
        this.setState({redirect:true});
    };
    onFileUpload = () => { 
     
        // Create an object of formData 
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "myFile", 
          this.state.selectedFile, 
          this.state.selectedFile.name 
        ); 
       
        // Details of the uploaded file 
        console.log(this.state.selectedFile); 
       
        // Request made to the backend api 
        // Send formData object 
        axios.post("api/uploadfile", formData); 
      }; 
    onFileChange = event => { 
     
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
       
      }; 
      fileData = () => { 
     
        if (this.state.selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              <p>File Type: {this.state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>Choose before Pressing the Upload button</h4> 
            </div> 
          ); 
        } 
      }; 
       
    render() {
        if (this.state.redirect){
            return <Redirect to={'/pos'} />
        }
        return (
        
            
        <div>

            <Zoom>
                <img src={process.env.PUBLIC_URL + "/headerpos.jpg"} style={{width:"40%",minWidth:"400px"}} />
                <div style={{ background: "white", height: "20%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
                </div>
            </Zoom>
            
            <Jumbotron >
            <p className="lead">
                <Button color="primary"  onClick ={this.handleButton }>Buscar un documento</Button>
                </p> 
                <h1 className="display-10">Buscar obras sociales por lista</h1>
              
                <div> 
            <h1> 
              GeeksforGeeks 
            </h1> 
            <h3> 
              File Upload using React! 
            </h3> 
            <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          {this.fileData()} 
        </div>
            </Jumbotron>  

        </div>
        );

    }
}

export default InfoListPage;
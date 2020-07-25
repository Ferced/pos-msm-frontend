import React from 'react';
import { InputGroup, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Jumbotron, Col,Row
  } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/SyncLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class InfoCard extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
        request_loading:true,
        patient_name:'',
        health_care: '',
        info:false,
        url_api: 'http://localhost:5000/',
        data: {}
        };
    };
    getInfoFromAPI = () => {
    console.log(this.state.data[0]["patient_name"])
    
    // patient_name: res.data["patient_name"], health_care: res.data["health_care"],info: res.data["info"] 
    }
    componentWillMount() {
        axios.get(this.state.url_api+this.props.path+this.props.document)
          .then(res =>this.setState({ request_loading:false,data : res.data, patient_name: res.data[0]["patient_name"], health_care: res.data[0]["health_care_name"],info: res.data[0]["info"]  }))
      }
    render() {
        return (
            

            <Zoom>
                <div style ={{minWidth: "40%",margin:"15px"}}>
                    <Card >
                        
                        <CardBody>
                        { this.state.request_loading 
                        ? 
                        <div className="sweet-loading">
                        <ClipLoader
                          css={override}
                          size={15}
                          color={"#00fff2"}
                          loading={this.state.loading}
                        />
                      </div>
                        : 
                        <div>
                         <CardTitle>Consulta {this.props.title}</CardTitle>
                         { this.state.info ? 
                         <div>
                         <CardText>Nombre: {this.state.patient_name}</CardText>
                         <CardText>Nombre de obra social: {this.state.health_care}</CardText> 
                         </div>
                         : <CardText>No hay informacion</CardText>
                         }
                         </div>
                        
                    }
                           
                        </CardBody>
          
                    </Card> 
                </div>
            </Zoom>
        );
    }
}

export default InfoCard;
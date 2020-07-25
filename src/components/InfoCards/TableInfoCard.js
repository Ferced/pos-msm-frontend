import React from 'react';
import { Card, CardBody,
    Table,
    CardTitle,
    Button,
    CardText
  } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class TableInfoCard extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
        request_loading: true,
        patient_name:'',
        provider_data: [],
        info:false,
        url_api: 'http://localhost:5000/',
        data: {}
        };
    };

    getInfoFromAPI = () => {
    console.log(this.state.provider_data)
                               
    
    // patient_name: res.data["patient_name"], health_care: res.data["health_care"],info: res.data["info"] 
    }
    componentWillMount() {
        axios.get(this.state.url_api+this.props.path+this.props.document)
          .then(res =>this.setState({ request_loading:false,provider_data : res.data['provider_data'], patient_name: res.data["patient_name"],info: res.data["info"]  }))
      }
    render() {
        return (
            <Zoom>
                <div style ={{minWidth: "40%",margin:"15px"}}>
                    <Card  >
                        <div style={{marginTop:"25px",marginBottom:"25px"}}>
                            
                        { this.state.request_loading 
                        ? 
                        <div className="sweet-loading">
                        <SyncLoader
                          css={override}
                          size={15}
                          color={"#00fff2"}
                          loading={this.state.loading}
                        />
                      </div>
                      :
                      <div className = "info">
                      
                        <CardTitle >
                            <CardText>
                               Consulta PAMI
                           </CardText>
                           </CardTitle>
                           
                            
                           { this.state.info ?
                           <div>
                           <CardText>
                               Nombre: {this.state.patient_name}
                           </CardText>
                       
                        <CardBody>
                            <Table >
                                <thead>
                                    <tr>
                                    <th>D. MODULO</th>
                                    <th>RED</th>
                                    <th>PRESTADOR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                     this.state.provider_data.map((element) =>
                                     <tr>
                                     <td>{element["D_MODULO"]}</td>
                                     <td>{element["RED"]}</td>
                                     <td>{element["PRESTADOR"]}</td>
                                     </tr>
                                     )
                                    }
                               
                                </tbody>
                            </Table>
                        </CardBody>
                        </div>
                        :
                        <CardText>
                        No hay informacion
                    </CardText>
    }
    </div>
     }
          </div>
                    </Card> 
                </div>
            </Zoom>
        );
    }
}

export default TableInfoCard;
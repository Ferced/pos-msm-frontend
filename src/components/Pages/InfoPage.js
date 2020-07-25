import React from 'react';
import { InputGroup, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Jumbotron, Col,Row
  } from 'reactstrap';
import InfoCard from '../InfoCards/InfoCard';
import TableInfoCard from '../InfoCards/TableInfoCard';
import MaterialIcon from 'material-icons-react';
import Zoom from 'react-reveal/Zoom';
import { Redirect } from 'react-router';

class InfoPage extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
        redirect: false 
        };
    };
    handleButton = () => {
        this.setState({redirect:true});
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
                <Button color="primary"  onClick ={this.handleButton }>Buscar otro documento</Button>
                </p> 
                <h1 className="display-10">Obras sociales asociadas al documento: {this.props.match.params.id}</h1>
                <div>
                    <Row xs="12" style={{alignItems:"center", justifyContent:"center"}}>
                        <InfoCard path={"spin/"} document={this.props.match.params.id} title={"spin"}/>
                        <InfoCard path={"puco/"} document={this.props.match.params.id} title={"puco"} />
                    </Row>
                    <Row xs="12" style={{alignItems:"center", justifyContent:"center"}}>
                        <InfoCard path={"ioma/"} document={this.props.match.params.id} title={"ioma"} />
                        <InfoCard path={"puco_sumar/"} document={this.props.match.params.id} title={"puco sumar"} />
                    </Row>
                </div>       
                <hr className="my-2" />
                <TableInfoCard  path={"pami/"} document={this.props.match.params.id} title={"pami"}/>
      
              <p className="lead">
                <Button color="primary"  onClick ={this.handleButton } >Buscar otro documento</Button>
                </p> 

            </Jumbotron>    
        </div>
        );

    }
}

export default InfoPage;
import React from 'react';
import {  Button } from 'reactstrap';
import SearchInput from '../SearchInput/SearchInput';
import { Redirect } from 'react-router';
import Zoom from 'react-reveal/Zoom';

class HomePage extends React.Component{

       
    constructor(props){
        super(props);
        this.state = { 
        document: '',
        info:false,
        redirect: false, 
        redirectPath: "" 
        };
    };
    handleSubmit = () => {
        this.setState({redirect:true, redirectPath : "/informacion/"+this.state.document});
    };
    handleButton = () => {
        this.setState({redirect:true, redirectPath : "/informacion_por_lista/"});
    };
    handleInput = event => {
        this.setState({document: event.target.value})
        };
    render() {
        if (this.state.redirect){
            return <Redirect to={this.state.redirectPath} />
        }
        return (
        <div>
            <Zoom>
            <img src={process.env.PUBLIC_URL + "/headerpos.jpg"} style={{width:"70%",minWidth:"400px"}} />
            <div style={{ background: "white", height: "20%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
            </div>
            </Zoom>
            <SearchInput document={this.state.document} handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
            <Button color="primary"  onClick ={this.handleButton } >Buscar por lista</Button>
        </div>
        );

    }
}

export default HomePage;
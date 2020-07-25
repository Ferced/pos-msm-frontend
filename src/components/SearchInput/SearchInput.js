import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button
} from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import Zoom from 'react-reveal/Zoom';

class SearchInput extends React.Component{
 
    render() {
        return (
        <Zoom>
            <div style = {{padding: "60px"}}>
                
                <MaterialIcon icon="search" size="large" color="#64B5F6" />
               <form onSubmit ={this.props.handleSubmit }>

                    <InputGroup >
                        <Input 
                        type="number"
                        value={this.props.document}
                        onChange={this.props.handleInput}
                        placeholder="Ingrese un documento" />
                        <Button type="submit" color="primary">Buscar</Button>
                        </InputGroup>
               </form>
            
            </div>
        </Zoom>

        );

    }
}

export default SearchInput;
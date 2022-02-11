import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import DanceS1 from "../components/dance-s1";
import DanceS2 from "../components/dance-s2";
import DanceS3 from "../components/dance-s3";

class Dance extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <DanceS1/>
                <DanceS2/>
                <DanceS3/>
            </Container>    
        );
    }
}

export default Dance;
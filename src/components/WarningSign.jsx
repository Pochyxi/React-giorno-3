import { Alert } from 'react-bootstrap';

const WarningSign = (props) => {
    return (
        
            <Alert key={props.color} variant={props.color}>
              {props.text}
            </Alert>
          )

      
}

export default WarningSign;
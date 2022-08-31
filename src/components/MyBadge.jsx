import { Badge } from "react-bootstrap"

const MyBadge = (prop) => {
    return (
        <Badge bg={prop.color}>{prop.text}</Badge>
    )
}

export default MyBadge;
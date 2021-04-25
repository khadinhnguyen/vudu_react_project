import {Button} from 'react-bootstrap';
import {useStateValue} from './StateProvider';

export default function CheckoutProduct({id,title,type,price}) {
    console.log(title, price);
    const [{basket}, dispatch] = useStateValue();

    const removeItem = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })

    }
    return(
        <tr>
            <td>{title}</td>
            <td>{type}</td>
            <td>${price}</td>
            <td>
                <Button variant="danger" onClick={removeItem} >
                    Remove
                </Button>
            </td>
        </tr>
    )



}
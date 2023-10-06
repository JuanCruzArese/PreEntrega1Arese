import { Avatar, Badge} from 'antd';
import {ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = () => {
    return (
        <>
        <Badge count={90} overflowCount={10}>
            <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />}/>
        </Badge>
        </>
    )
}

export default CartWidget
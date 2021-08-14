import React, {FC} from 'react';

interface IButton{
    width?: string;
    height?: string;
}

const Button: FC<IButton> = ({width, height}) =>{
    return (
        <>
        <button className='button' style={{width, height}}>Looking for a tooltip?</button>
        </>
    )
}

export default Button;
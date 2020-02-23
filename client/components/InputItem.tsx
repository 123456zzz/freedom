import React from "react";
import "./InputItem.scss";

interface InputProps {
    title?: string;
    value?: string;
    onChange: (text: string, title?: string) => void;
}

const InputItem = (props: InputProps) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    };

    return (
        <div className='inputItem'>
            <span>{props.title}</span>
            <input type='text' onChange={onChange} />
        </div>
    );
};

export default InputItem;

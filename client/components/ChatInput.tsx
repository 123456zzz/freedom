import React from "react";
import "./ChatInput.scss";
export default class ChatInput extends React.Component {
    render() {
        return (
            <div className='chatInput'>
                <p>
                    请先<b role='button'>登录</b>
                </p>
            </div>
        );
    }
}

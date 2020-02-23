import React, { Fragment } from "react";
import "./App.scss";
import "./asserts/iconfont/iconfont.css";
import SearchBar from "./components/SearchBar";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";
import Dialog from "./components/Dialog";
const App: React.FC = () => {
    return (
        <Fragment>
            <Dialog></Dialog>
            <div className='app'>
                <div className='leftContainer'>
                    <SearchBar></SearchBar>
                </div>
                <div className='rightContainer'>
                    <ChatBox></ChatBox>
                    <ChatInput></ChatInput>
                </div>
            </div>
        </Fragment>
    );
};

export default App;

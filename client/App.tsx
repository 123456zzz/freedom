import React from "react";
import "./App.scss";
import "./asserts/iconfont/iconfont.css";
import SearchBar from "./components/SearchBar";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";
const App: React.FC = () => {
    return (
        <div className='app'>
            <div className='leftContainer'>
                <SearchBar></SearchBar>
            </div>
            <div className='rightContainer'>
                <ChatBox></ChatBox>
                <ChatInput></ChatInput>
            </div>
        </div>
    );
};

export default App;

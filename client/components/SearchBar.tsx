import React from "react";
import "./SearchBar.scss";
export default class SearchBar extends React.Component {
    render() {
        return (
            <div className='SearchBar'>
                <span className='iconfont icon-search'></span>
                <input type='text' />
                <span className='iconfont icon-close'></span>
            </div>
        );
    }
}

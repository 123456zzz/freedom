import React from "react";
import InputItem from "./InputItem";
import "./Dialog.scss";

interface State {
    visible: boolean;
    selectIndex: number;
    logingUsername: string;
    logingPassword: string;
    logupUsername: string;
    logupPassword: string;
}

interface Props {
    visible: boolean;
}

export default class Dialog extends React.Component<Props, State> {
    static defaultProps = {
        visible: true
    };

    state: State = {
        visible: this.props.visible,
        selectIndex: 0,
        logingUsername: "",
        logingPassword: "",
        logupUsername: "",
        logupPassword: ""
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    handleChange = (value: string, title?: string) => {
        const { selectIndex } = this.state;
        if (title) {
            if (selectIndex === 0) {
                if (title === "用户名") {
                    this.setState({ logingUsername: value });
                } else {
                    this.setState({ logingPassword: value });
                }
            } else {
                if (title === "用户名") {
                    this.setState({ logupUsername: value });
                } else {
                    this.setState({ logupPassword: value });
                }
            }
        }
    };

    handleSelect = (index: number) => () => {
        this.setState({ selectIndex: index });
    };

    render() {
        const { visible, selectIndex } = this.state;
        return (
            visible && (
                <div className='dialog' onClick={this.onClose}>
                    <div
                        className='container'
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        <div className='header'>
                            <span
                                className={
                                    selectIndex === 0 ? "active" : "inactive"
                                }
                                onClick={this.handleSelect(0)}
                            >
                                登录
                            </span>
                            <span
                                className={
                                    selectIndex === 1 ? "active" : "inactive"
                                }
                                onClick={this.handleSelect(1)}
                            >
                                注册
                            </span>
                        </div>
                        <div
                            className={`content ${
                                selectIndex === 0 ? "one" : "two"
                            }`}
                        >
                            <div className='login'>
                                <InputItem
                                    title='用户名'
                                    onChange={this.handleChange}
                                />
                                <InputItem
                                    title='密码'
                                    onChange={this.handleChange}
                                />
                                <button></button>
                            </div>
                            <div className='logup'>
                                <InputItem
                                    title='用户名1'
                                    onChange={this.handleChange}
                                />
                                <InputItem
                                    title='密码'
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        );
    }
}

import React, { Component } from 'react'
import { Toast } from 'react-bootstrap';

export default class MyToast extends Component {
    render() {
        const toastCss={
            position:'fixed',
            top:'20px',
            right:'20px',
            zIdex:'1',
            boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
        }

        return (
            <div style={this.props.children.show ?toastCss:null}>
                <Toast className={"border border-success bg-success text-white"} show={this.props.children.show}>
                    <Toast.Header className={"bg-success text-white"} closeButton={false}>
                        <img src="/logo.png" className="rounded mr-2" alt="" width="20px"  height="20px" />
                        <strong className="mr-auto">Success</strong>
                        <small>1 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                        {this.props.children.message}
                    </Toast.Body>
                </Toast>
            </div>
        )
    }
}

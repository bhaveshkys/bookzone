import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Talk from 'talkjs';

export class Inbox extends Component {
    
    constructor(props) {
        super(props);
        this.inbox = undefined;
    }

    componentDidMount() {
        // Promise can be `then`ed multiple times
        Talk.ready
            .then(() => {
                const currentUser=this.props.user
                
                const me = new Talk.User({
                    id: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photoUrl: currentUser.photoURL,
                    welcomeMessage: 'im buyer'
                });

                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: "tZPGyoWm",
                        me: me
                    });
                }
                this.inbox = window.talkSession.createInbox();
                this.inbox.mount(this.container);

            })
            .catch(e => console.error(e));
    }

    componentWillUnmount() {
        if (this.inbox) {
            this.inbox.destroy();
        }
    }
    
    render() {
        return (<span>
            <div style={{height: '500px'}} ref={c => this.container = c}>Loading...</div>
        </span>);
    }
}


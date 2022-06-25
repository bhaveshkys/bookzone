import React, { Component } from 'react';
import Talk from 'talkjs';

export class Temp extends Component {
    
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
                const seller =this.props.seller
                const other = new Talk.User({
                    id: seller.user_uid,
                    name: seller.name,
                    email: seller.email,
                    photoUrl: seller.photoURL,
                    welcomeMessage: "im seller"
                });
                
                // You control the ID of a conversation. oneOnOneId is a helper method that generates
                // a unique conversation ID for a given pair of users. 
                const bookId=this.props.bookId
                const oneOnOneId= Talk.oneOnOneId(me, other)
                const id=oneOnOneId+bookId
                /* const conversationId = Talk.oneOnOneId(me, other); */
            
                const conversation = window.talkSession.getOrCreateConversation(id);
                conversation.setAttributes({
                    subject: this.props.bookName,
                  });
                conversation.setParticipant(me);
                conversation.setParticipant(other);
                this.inbox = window.talkSession.createInbox({
                    selected: conversation
                });
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


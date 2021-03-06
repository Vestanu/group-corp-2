import React, { Component } from "react";
import { MessagesList } from "../MessagesList";
import { MessageForm } from "../MessageForm";
import "./Messenger.css";
import { nanoid } from "nanoid";

export class Messenger extends Component {
    state = {
        messages: [{
            author: "Ivan",
            text: "Привет!",
            id: nanoid()
        },
        {
            author: "Maxim",
            text: "Как дела?",
            id: nanoid()
        }],
    };

    interval = null;

    handleMessageSend = (message) => {
        message.id = nanoid();

        this.setState({ messages: this.state.messages.concat([message]) });

        console.log(message);
        clearInterval(this.interval);

    };


    randomMessage(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    componentDidUpdate() {

        clearInterval(this.interval);

        const lastAuthor = this.state.messages[this.state.messages.length - 1].author;

        const botAnswer = [`Привет, ${lastAuthor}, чем я могу тебе помочь?`, `${lastAuthor}, спроси что-нибудь проще.`, `Очень интересная история, ${lastAuthor}`, `Не согласен с тобой, ${lastAuthor}.`, `Привет, ${lastAuthor}, приятно познакомиться!`, `${lastAuthor}, повтори, пожалуйста.`, `${lastAuthor}, полностью согласен!`, `${lastAuthor}, как дела?`, `${lastAuthor}, погода и правда сегодня хорошая.`, `${lastAuthor}, пока!`,];


        const index = this.randomMessage(1, 10);


        const answer = {
            author: "Bot",
            text: botAnswer[index - 1],
        };


        this.interval = setInterval(() => {
            this.handleMessageSend(answer);
        }, 1000);

    }


    render() {
        const { messages } = this.state;

        return (<div className="messanger">
            <div className="messages-list"><MessagesList items={messages} /></div>

            <MessageForm onSend={this.handleMessageSend} />
        </div>);
    }
}
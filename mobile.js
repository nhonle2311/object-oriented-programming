class Mobile {
    constructor(battery, draft, inbox, sent) {
        this.battery = 100;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }
    charge(){
        return this.battery = 100;
    }
    textMessage(text){
        this.draft = text;
    }
    showInbox(){
        return this.inbox;
    }
    showSent(){
       return  this.sent;
    }
    sendMessage(mobile){
        this.sent.push(this.draft);
        mobile.inbox.push(this.draft);
        this.draft ='';
    }
}


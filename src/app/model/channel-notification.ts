export class ChannelNotification {
    isActive: boolean;
    channelId: string;
    senderId: string;

    constructor(isActive: boolean, channelId: string, senderId: string) {
        this.isActive = isActive;
        this.channelId = channelId;
        this.senderId = senderId;
    }
}

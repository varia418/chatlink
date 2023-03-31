import * as signalR from "@microsoft/signalr";
const URL = process.env.HUB_ADDRESS ?? "https://localhost:5001/hubs/chat";
class Connector {
	private connection: signalR.HubConnection;
	public events: (
		onMessageReceived: (username: string, message: string) => void
	) => void;
	static instance: Connector;
	constructor() {
		this.connection = new signalR.HubConnectionBuilder()
			.withUrl(URL)
			.withAutomaticReconnect()
			.build();
		this.connection.start().catch((err) => document.write(err));
		this.events = (onReceiveMessage) => {
			this.connection.on("ReceiveMessage", (username, message) => {
				onReceiveMessage(username, message);
			});
		};
	}
	public newMessage = (messages: string) => {
		this.connection
			.send("newMessage", "foo", messages)
			.then((x) => console.log("sent"));
	};
	public static getInstance(): Connector {
		console.log("getInstance is called");
		if (!Connector.instance) Connector.instance = new Connector();
		return Connector.instance;
	}
}
export default Connector.getInstance;

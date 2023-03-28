import './Message.css'

export default function Message(props) {
    return (
        <div className={"message" + (props.personal ? " personal" : "")}>
            {props.content}
        </div>
    );
}
import "./Title.scss";

export default function Title(props) {
    return (
        <h1 className="Title">
            {props.children}
        </h1>
    )
}

import './SectionTitle.scss'

export default function SectionTitle(props) {
    return (
        <h2 className="SectionTitle">
            {props.children}
        </h2>
    )
}

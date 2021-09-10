export default function Title(props) {
    return (
        <>
            <h1 className="Title">
                {props.children}
            </h1>
            <style jsx>{`
                .Title {
                    font-weight: 800;
                    font-size: 22pt;
                    text-align: center;
                }
            `}</style>
        </>
    )
}

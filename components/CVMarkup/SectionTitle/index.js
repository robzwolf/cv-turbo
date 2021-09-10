export default function SectionTitle(props) {
    return (
        <>
            <h2 className="SectionTitle">
                {props.children}
            </h2>
            <style jsx>{`
                .SectionTitle {
                    font-weight: normal;
                    font-size: 16pt;
                    margin-bottom: 0;
                    margin-top: 12pt;
                }
                
                .SectionTitle::after {
                    content: '';
                    display: block;
                    width: 98%;
                    border-bottom: 2px inset #888;
                    margin: 4pt auto 0 auto;
                }
            `}</style>
        </>
    )
}

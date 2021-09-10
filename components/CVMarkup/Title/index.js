import {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function Title({children, onChange, tabIndex}) {
    const [title, setTitle] = useState(children)

    return (
        <>
            <div className="TitleContainer">
                <TextareaAutosize
                    cacheMeasurements
                    value={title}
                    className="Title"
                    minRows={1}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="TitleLabel">Title</div>
            </div>
            <style jsx global>{`
                .TitleContainer {
                    position: relative;
                }
                
                .TitleLabel {
                    display: none;
                }
                
                .Title:focus-visible + .TitleLabel,
                .TitleContainer:hover .TitleLabel {
                    display: block;
                    width: auto;
                    height: auto;
                    background: #2f3a3c;
                    font-size: 16px;
                    font-weight: bold;
                    position: absolute;
                    top: -30px;
                    color: white;
                    padding: 2px 8px;
                    text-align: left;
                    border: 3px solid #68a1ea;
                    left: -3px;
                    font-family: Roboto, sans-serif;
                }
                
                .Title {
                    font-weight: 800;
                    font-size: 22pt;
                    text-align: center;
                    resize: none;
                    width: 100%;
                    border: none;
                }
                
                .TitleContainer:hover .Title:not(:focus-visible) {
                    background: #f0f5ff;
                }

                .Title:focus-visible {
                    outline: none;
                    box-shadow: 0 0 3px 3px rgba(0, 119, 247, 0.37);
                    background: #f0f5ff;
                }
            `}</style>
        </>
    )



    const [hasFocus, setHasFocus] = useState(false);

    const gotFocus = () => {
        console.log("got focus");
        setHasFocus(true);
    }

    const lostFocus = () => {
        console.log("lost focus");
        setHasFocus(false);
    }

    const PresentationStyles = () => (
        <style jsx>{`
            .Title {
                    font-weight: 800;
                    font-size: 22pt;
                    text-align: center;
                    position: relative;
                }
        `}</style>
    )

    const InputStyles = () => (
        <style jsx>{`
            .Title:focus-visible,
            .Title:empty {
                outline: none;
                box-shadow: 0 0 3px 3px rgba(0, 119, 247, 0.37);
                background: #f0f5ff;
            }

            .Title:focus-visible::before,
            .Title:empty::before {
                content: "Title";
                display: block;
                width: auto;
                height: auto;
                background: #2f3a3c;
                font-size: 16px;
                font-weight: bold;
                position: absolute;
                top: -30px;
                color: white;
                padding: 2px 8px;
                text-align: left;
                border: 3px solid #68a1ea;
                left: -3px;
                font-family: Roboto, sans-serif;
            }
        `}</style>
    )

    if (hasFocus) {
        return (
            <>
                <textarea className="Title" autoFocus={true} onBlur={lostFocus} tabIndex={tabIndex}>
                    {children}
                </textarea>
                <PresentationStyles />
                <InputStyles />
            </>
        )
    } else {
        return (
            <>
                <h1 className="Title" onFocus={gotFocus} onClick={gotFocus} tabIndex={tabIndex}>
                    {children}
                </h1>
                <PresentationStyles />
            </>
        )
    }

    // return (
    //     <>
    //         <h1 className="Title" onFocus={setHasFocus(true)}>
    //             {children}
    //         </h1>
    //         {/*<style jsx>{`*/}
    //         {/*    .Title {*/}
    //         {/*        font-weight: 800;*/}
    //         {/*        font-size: 22pt;*/}
    //         {/*        text-align: center;*/}
    //         {/*        position: relative;*/}
    //         {/*    }*/}
    //
    //         {/*    .Title:focus-visible,*/}
    //         {/*    .Title:empty {*/}
    //         {/*        outline: none;*/}
    //         {/*        box-shadow: 0 0 3px 3px rgba(0, 119, 247, 0.37);*/}
    //         {/*        background: #f0f5ff;*/}
    //         {/*    }*/}
    //
    //         {/*    .Title:focus-visible::before,*/}
    //         {/*    .Title:empty::before {*/}
    //         {/*        content: "Title";*/}
    //         {/*        display: block;*/}
    //         {/*        width: auto;*/}
    //         {/*        height: auto;*/}
    //         {/*        background: #2f3a3c;*/}
    //         {/*        font-size: 16px;*/}
    //         {/*        font-weight: bold;*/}
    //         {/*        position: absolute;*/}
    //         {/*        top: -30px;*/}
    //         {/*        color: white;*/}
    //         {/*        padding: 2px 8px;*/}
    //         {/*        text-align: left;*/}
    //         {/*        border: 3px solid #68a1ea;*/}
    //         {/*        left: -3px;*/}
    //         {/*        font-family: Roboto, sans-serif;*/}
    //         {/*    }*/}
    //         {/*`}</style>*/}
    //     </>
    // )
}

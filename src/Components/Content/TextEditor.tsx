import {useState} from "react";

enum TextEditorMode {
    View,
    Edit
}

export type ITextEditorProps = {
    text: string;
    onChange: (text: string) => void;
}

const TextEditor = (props: ITextEditorProps) => {
    const [mode, setMode] = useState(TextEditorMode.View);
    let el = undefined;

    const onChaneModeHandle = () => {
        setMode(TextEditorMode.Edit);

    }

    const onBlurHandler = () => {
        setMode(TextEditorMode.View);
    }

    const onChange = (e: any) => {
        props.onChange(e.target.value)
    }

    switch (mode) {
        case TextEditorMode.View:
            el = <div onClick={onChaneModeHandle}>{props.text}</div>
            break;
        case TextEditorMode.Edit:
            el = <input autoFocus={true} type="text" onBlur={onBlurHandler}
                        value={props.text} onChange={onChange}/>
            break;
    }
    return <div className="editor">
        {el}
    </div>
}
export default TextEditor;
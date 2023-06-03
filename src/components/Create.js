import { EditorState } from "draft-js";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function Create() {
    let editorState = EditorState.createEmpty();
    const [description, setDescription] = useState(editorState)
    const onEditorStateChange = (editorState) => {
        setDescription(editorState);
    }

    return (
        <div className="h-screen">
            <div>
                <div className="flex justify-center text-[2vw] font-bold py-8"> Post döret</div>
                <div className='flex justify-center'>
                    <div className='bg-slate-200 w-[60%] p-3'>
                        <Editor editorState={description}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName='wrapperClassName'
                            editorClassName='editorClassName'
                            onEditorStateChange={onEditorStateChange}
                        />
                        {/* <textarea className='hidden' disabled ref={(val) => userinfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent()))}/> */}
                    </div>
                </div>

            </div>
            <div>
                <div className="flex justify-center  text-[2vw] font-bold py-6">
                    Postdyň ady
                </div>
                <div className="flex justify-center">
                    <input className="w-[40%] p-2 border rounded-lg   bg-[#7070b386]" />
                </div>
            </div>
            <div>
                <div className="flex justify-center  text-[2vw] font-bold py-6">Postdyn suraty</div>
                <div className="flex justify-center">
                    <input type="file" />
                </div>
            </div>
        </div>
    )
}


export default Create;
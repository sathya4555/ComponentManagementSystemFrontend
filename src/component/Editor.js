import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { Typography, Button, Form, message, Input } from 'antd';
import { EditorState, convertToRaw } from "draft-js";
// import '.';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    const rawDraftContentState = JSON.stringify( convertToRaw(this.state.editorState.getCurrentContent()) );
    console.log("String data",rawDraftContentState);
    var contentRaw = convertToRaw(this.state.editorState.getCurrentContent());
    console.log("Satae content",contentRaw.blocks.text);
const submit = () =>{
  const response = fetch(`http://localhost:3000/component/draft_add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        data: rawDraftContentState
    })

}).then(response => response.json())
    .then(json => console.log(json));
}
// const contentState = convertFromRaw(JSON.parse(this.state.editorState.getCurrentContent()));
// const editorState1 = EditorState.createWithContent(rawDraftContentState);
    return (
      <div   style={{backgroundColor:"Gainsboro",marginLeft: 300,marginRight: 300}}>
        <Editor

          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          placeholder="Post Content"
        
         
        />
{/*       
        <textarea
          disabled
          value={editorState.getCurrentContent()}
        ></textarea> */}

<Button style={{marginTop: 200}} type="primary" size="large"  className="btn btn-danger" onClick={submit}>
                    Submit
                </Button>

                {/* <p>Sathya</p> */}

      </div>
    );
  }
}
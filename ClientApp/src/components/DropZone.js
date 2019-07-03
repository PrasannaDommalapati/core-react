import React, { Component } from "react";
import './DropZone.css'
import Editor from './Editor'

class DropZone extends Component {
  constructor(props) {
    super(props);
    this.state = { hightlight: false, files: [] };
    this.fileInputRef = React.createRef();

    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.readFile = this.readFile.bind(this);
  }

  readFile = event => {
    event.preventDefault();
    const files = event.target.files;
    let filesArray = this.fileListToArray(files);
    this.setState({ files: filesArray });
  };

  openFileDialog = () => {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  };

  onFilesAdded = event => {
    if (this.props.disabled) return;
    const files = event.target.files;
    let filesArray = this.fileListToArray(files);
    this.setState({ files: filesArray, hightlight: false });
  };

  onDragOver = evt => {
    evt.preventDefault();
    if (this.props.disabled) return;
    this.setState({ hightlight: true });
  };

  onDragLeave = () => this.setState({ hightlight: false });

  onDrop = event => {
    if (this.props.disabled) return;
    const files = event.target.files;
    let filesArray = this.fileListToArray(files);
    this.setState({ files: filesArray, hightlight: false });
  };

  fileListToArray = list => {
    let array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };

  render() {
    return (
      <div>
        <div
          className={`Dropzone ${this.state.hightlight ? "Highlight" : ""} mb-5`}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDrop={this.onDrop}
          onClick={this.openFileDialog}
          style={{ cursor: this.props.disabled ? "default" : "pointer" }}
        >
          <input
            ref={this.fileInputRef}
            className="FileInput"
            type="file"
            multiple
            onChange={this.onFilesAdded}
          />
          <span>
            {this.state.files.length === 0 &&
              "Click here or drop a file to upload!"}

            {this.state.files.length !== 0 && this.state.files.map((acceptedFile, i) => (
              <div key={i} >{acceptedFile}</div>
            ))}
          </span>
        </div>
        <Editor />
      </div>

    );
  }
}

export default DropZone;

import logo from './logo.svg';
import './App.css';
import UploadPage from './component/UploadPage';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Nav } from './component/Nav';
import { ViewUploads } from './component/ViewUploads';
import TextEditor, { EditorContainer } from './component/Editor';

function App() {


const [getall, setgetall] = useState('')

  useEffect(() => {
    async function getAlll() {
    try {
     
        const reqUrl3 = 'http://localhost:3000/component'
        const response13 = await fetch(reqUrl3)
        const resJSON3 = await response13.json()
        setgetall(resJSON3)
      
    } catch {

    }}
    getAlll()
  }, [])


  return (
    <div className="App">
   <BrowserRouter>
        <Nav  />
        <main className="form-signin">
        <Route exact path="/admin/upload" component={UploadPage} />
        <Route exact path="/admin/view"  component={() => <ViewUploads getall={getall} />}  />
        <Route exact path="/admin/editor"  component={TextEditor}  />
       
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

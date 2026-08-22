import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import './notes.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Notes = ({windowName,setWindowState}) => {
    const [markdown,setMarkdown]=useState(null)
    useEffect(()=>{
        fetch('/notes.txt')
            .then(res=>res.text())
            .then(text=>setMarkdown(text))
    },[])
  return (
    <MacWindow 
    windowName={windowName}
    setWindowState={setWindowState}>
        <div className='notes-window'>
            {markdown ?  <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Notes

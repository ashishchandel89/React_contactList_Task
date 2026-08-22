import React from "react";
import "./dock.scss";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, notes: true }));
        }}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>
      <div 
        onClick={()=>{
          window.open("https://calendar.google.com/","_blank")
        }}
      className="icon calender">
        <img src="/doc-icons/calender.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>
      <div 
        onClick={()=>{
          window.open('https://linkedin.com/in/ashish-chandel-3908b9302','_blank')
        }}
      className="icon link">
        <img src="/doc-icons/link.svg" alt="" />
      </div>
      <div
      onClick={()=>{
        window.open('mailto:chandel078ashish@gmail.com')
      }}
       className="icon mail">
        <img src="/doc-icons/mail.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState((state) => ({ ...state, cli: true }));
        }}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;

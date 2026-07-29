import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
import StoryContext from "./context/StoryContext";

const root= ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <StoryContext>
    <App/>
    </StoryContext>
       
   
)
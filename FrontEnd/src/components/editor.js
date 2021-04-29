import React,{useRef, useState} from 'react'
import EmailEditor from 'react-email-editor'
import axios from 'axios'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import Navi from './Navi';

const Editors=(props)=>{
    const [img,setImg]=useState('');
    const ref=useRef(null)

    const exportHTML=()=>{
        ref.current.editor.exportHtml((data) => {
            const { design, html } = data;
            
          });
    }
    const onLoad=()=>{
      ref.current.editor.style()
    }
    const saveDesign=()=>{
        console.log(ref.current)
        ref.current.editor.exportHtml((data) => {
            const { design, html } = data;
            console.log('exportHtml', html);
            const json = {
                html: html,
                css: ".test { background-color: green; }"
              };
              const username = "a97ae3a0-5cdc-4a9b-85ce-2fe7dd00ff5e";
              const password = "b6703f3a-23ac-40f9-993b-053430cd2aa9";
              const options = {
                method: 'POST',
                body: JSON.stringify(json),
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Basic ' + btoa(username + ":" + password)
                }
              }
              fetch('https://hcti.io/v1/image', options)
                .then(res => {
                    if (res.ok) {
                    return res.json();
                    } else {
                    return Promise.reject(res.status);
                    }
                })
                .then(data => {
                    // Image URL is available here
                    console.log(data.url)
                    setImg(data.url)
                })
                .catch(err => console.error(err));
            console.log('exportHtml', html);
          });
        ref.current.saveDesign((design) => {
            console.log('saveDesign', design);
            console.log(img)
            const newTemp = { title :JSON.stringify(design),
            img_url:img,
            };
            console.log('stringified',newTemp.title)
            axios.post('/api/posts',newTemp)
          });  
           
    }

    return(
        <div >
            <Navi/>
            <div style={{height:'5vh'}}></div>
            <EmailEditor ref={ref} appearance={{theme:'dark',panels:{tools:{dock:'left'}}}} style={{height:'90vh'}}/> 
            <div style={{display:"flex", justifyContent:"center"}}>
            <button style={{backgroundColor:'#222222',color:'white'}} onClick={saveDesign}>Save Template</button>
            <button style={{backgroundColor:'#222222',color:'white'}} className="" onClick={exportHTML}>Export HTML</button>
            </div>
        </div>

    )
}

export default Editors;
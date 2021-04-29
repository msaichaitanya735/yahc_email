import axios from 'axios';
import React,{useRef} from 'react'
import EmailEditor from 'react-email-editor'

class TemplateEditor extends React.Component {
    constructor(props) {
        super(props);
        this.emailEditorRef = React.createRef();
        this.state={
            temps:[],
            x:[],
            img:'',
        }
      }

      async componentDidMount(){
        const res = await fetch('/api/posts');
        const data = await res.json();
        this.setState({
            temps:data[this.props.id]
        })
        console.log(this.state.temps) 
    } 
     

    render(){
    const saveDesign=()=>{
        console.log(this.emailEditorRef.current)
        this.emailEditorRef.current.editor.exportHtml((data) => {
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
                    this.setState({img:data.url})
                })
                .catch(err => console.error(err));
            console.log('exportHtml', html);
          });
          
        this.emailEditorRef.current.saveDesign((design) => {
            console.log('saveDesign', design);
            console.log(this.state.img)
            const newTemp = { title :JSON.stringify(design),
                img_url:this.state.img,
                };
            console.log('stringified',newTemp.title)
            console.log('id:',this.state.temps._id)
            axios.put(`/api/post?id=${this.state.temps._id}`,newTemp);
          })       
    }
        return(
            <div>



<EmailEditor ref={this.emailEditorRef} onLoad={()=>{
                console.log(this.props.id)
                if(this.editor!==undefined){
                    this.emailEditorRef.current.loadDesign(JSON.parse(this.state.temps.title));
                    }else{
                        console.log('biscuit')
                        setTimeout (() =>this.emailEditorRef.current.loadDesign(JSON.parse(this.state.temps.title)), 1000);
                    }
                
            }} />
        {console.log('in tempeditor id is',this.props.id)}
        <button onClick={saveDesign} style={{backgroundColor:'#222222',color:'white',marginLeft:"45%"}}>Save Template</button>
        </div>
        )
    }
}

export default TemplateEditor;
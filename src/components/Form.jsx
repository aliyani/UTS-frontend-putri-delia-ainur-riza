import { useState } from "react"

const Form = () =>{
    const [gambar, setGambar] = useState ('')
    const [title, setTitle] = useState ('')
    const [content, setContent] = useState ('')

    const simpan = () =>{
        console.log('tombol di klik');
    }

    return(
        <div className="container border p-4">
            <h2>Input Data Card</h2>
            <label htmlFor="gambar">
                {gambar}
                <input type="text" className="Form-control" placeholder="gambar" id="gambar" onChange={(e)=>setGambar(e.target.value)}/>
            </label>
            <label htmlFor="title">
                {title}
                <input type="text" className="From-control" placeholder="title" id="title" onChange={(e)=>setTitle(e.target.value)}/>
            </label>
            <label htmlFor="content">
                {content}
                <input type="text" className="Form-control" placeholder="content" id="content" onChange={(e)=>setContent(e.target.value)}/>
            </label>
            <div className="d-flex flex-rows-reverse mt4">
                <button className="btn btn-primary" onClick={simpan}>Simpan</button>    
            </div>          
        </div>
    )
}
export default Form
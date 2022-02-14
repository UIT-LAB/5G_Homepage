import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function Write() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState([]);
    const [state, setState] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:9928/gallery/write')
            .then((res) => {
                setState(res.data);
            })
    }, []);

    const name = state.name;
    console.log(name);

    const goBack = () => {
        navigate(-1);
    }

    const FileSelectHandler = (e) => {
        setSelectedFile(e.target.files);
    }

    const titleHandler = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.log("title : ", title);
        console.log("File :", selectedFile);

        const formData = new FormData();
        Object.values(selectedFile).forEach(file => {
            formData.append("files", file);
        });
        formData.append("title", title);
        try {
            const res = await axios.post('http://localhost:9928/gallery/insert_write', formData, {
                headers : {
                    'Content-Type' : 'multipart/form-data'
                },
            })  .then((res) => {
                if(res.data == true){
                    goBack();
                } else {
                    console.log('실패');
                }
            })
        } catch (err) {
            console.log(err);
        }
    };

    

  return (
    <div>
        <h1>갤러리</h1>
        <p>ITRC 사업단 갤러리</p>
        <form onSubmit={HandleSubmit}>
            <input type="text" name="title" onChange={titleHandler} placeholder="title"></input>
            <p>작성 날짜 : {state.days}</p>
            {/* <p>글 번호 : {gid}</p> */}
            <p>작성자 : {name}</p>
            <input type="file" onChange={FileSelectHandler} accept="image/*" required name="attachments" required id="input_imgs" multiple/>
            <input type="submit" value="저장"/>
            <input type="hidden" name="gall_writer" value={name} />
        </form>
    </div>
  )
}

export default Write
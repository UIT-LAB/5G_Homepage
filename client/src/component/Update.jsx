import React from 'react';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Update(){
    let params = useParams();

    const [state, setState] = useState([]);
    const [selectedFile, setSelectedFile] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(async () => {
        await axios.get('http://localhost:9928/gallery/update', {
            params: { num : params.num }
        })
            .then((res) => {
                setState(res.data.db_data);
                // console.log(res.data.db_data);
                // console.log(state[0].gid);
            })
    }, [params.num]);

    // console.log(state);
    const gid = state.map(value => value['gid']);
    const g_title = state.map(value => value['g_title']);
    const date = state.map(value => value['g_write_date']);
    const image = state.map((value) => value['g_img'].toString().split(',')).flat([1]);

    const titleHandler = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("title : ", title);
        console.log("SF : ", selectedFile);
        const formData = new FormData();
        Object.values(selectedFile).forEach(file => {
            formData.append("files", file);
        })
        // formData.append("files", selectedFile);
        formData.append("titlex", g_title[0]);
        formData.append("title", title);
        // formData.append("title", )
        try {
            const res = await axios.post('http://localhost:9928/gallery/update_data', formData, {
                headers : {
                    'Content-Type' : 'multipart/form-data'
                },
            }) .then((res) => {
                // <Redirect to={`/gallery/detail/${gid}`}/>
                // console.log(res.data.db_data);
                // console.log(state[0].gid);
            })
        } catch (err) {
            console.log(err);
        }
    }
   
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div class="text-center m-5">
                <h1>갤러리</h1>
                <p>ITRC 사업단의 갤러리</p>
            </div>
            <div class="border border-2 p-4">
                <input type="title" name="title" onChange={titleHandler} placeholder={g_title}></input>
                <table class="table mt-2">
                <tbody class="align-middle">
                    <tr>
                    <td>
                        번호 : {gid}
                    </td>
                    <td>
                        <span class="float-end">작성일자 : {date}</span>
                    </td>
                    </tr>
                </tbody>
                </table>
                <div class = "float mt-3 input_wrap">
                    <input type="file" accept="image/*" required name="formData" required id="input_imgs" onChange={handleFileSelect} multiple/>
                </div>
            </div>
            <div class="imgs_wrap">
                <img id="img"/>
            </div>
          <div class="float-end mt-3">
            <input type="submit" value="수정"/>
            <input type="hidden" name="titlex" value={g_title} />
            <input type="hidden" name="imgx" value={image} />
          </div>
        </form>
    </div>
  )
}

export default Update
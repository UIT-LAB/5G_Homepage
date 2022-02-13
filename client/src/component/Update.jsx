import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Update(){
    let params = useParams();
    const [state, setState] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:9928/gallery/update', {
            params: { num : params.num }
        })
            .then((res) => {
                setState(res.data.db_data);
            })
    }, [params.num]);

    console.log(state);
    const gid = state.map(value => value['gid']);
    const title = state.map(value => value['g_title']);
    const date = state.map(value => value['g_write_date']);
    const image = state.map((value) => value['g_img'].toString().split(',')).flat([1]);

    console.log(image);
  return (
    <div>
        updatePage
        <hr/>
            글 번호 : {gid}
        <hr/>
            글 작성 일자 : {date}
        <hr/>
            <input type="text" name="title" placeholder={title}></input>
        <hr/>
        <div>
            <input type="file" accept="image/*" required name="attachments" required id="input_imgs" multiple/>
            <button type="button">수정</button>
            <button>취소</button>
        </div>
        {/* post -> update_data */}
        {/* post -> gallery/update_data */}
        {/* redirect("history.back") */}
    </div>
  )
}

export default Update
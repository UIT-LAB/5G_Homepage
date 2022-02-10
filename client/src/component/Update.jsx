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
    // const gid = state.map(value => value['']);

  return (
    <div>
        updatePage
        <hr/>
            글 번호 : {gid}
        <hr/>
            <input type="text" name="title" value={title}/>
        <hr/>
        <button>파일 업로드</button>
        {/* post -> update_data */}
        <button>수정</button>           
        {/* post -> gallery/update_data */}
        <button>취소</button>
        {/* redirect("history.back") */}
    </div>
  )
}

export default Update
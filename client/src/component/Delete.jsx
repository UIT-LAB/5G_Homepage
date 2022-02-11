// import React from 'react'
// import { useParams } from 'react-router-dom'

// function Delete() {
//     let params = useParams();
//     const [state, setState] = useState([]);

//     useEffect(async () => {
//         await axios.get('http://localhost:9928/gallery/delete', {
//             gid: { gidx : params.gidx }
//         })
//             .then((res) => {
//                 setState(res.data.db_data);
//             })
//     }, [params.num]);

//   return (
//     <div>
//         delete
//     </div>
//   )
// }

// export default Delete
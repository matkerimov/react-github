import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Container, Table} from "react-bootstrap";

const Repositories = ({repositories, search}) => {
    const {username} = useParams()

    return (
        <Container>
            <Table striped bordered hover className='mt-2'>
                <thead>
                <tr>
                    {/*<th>✧</th>*/}
                    <th>Name</th>
                    <th>Deployment</th>
                    <th>Last commit</th>
                    <th>Readme</th>
                </tr>
                </thead>
                <tbody>
                {
                    repositories.filter(item => item.name.includes(search)).map(item =>
                        <tr key={item.id} className='text-align-center'>
                            <td>✦</td>
                            <td>{item.name}</td>
                            <td>Go</td>
                            <td>{item.updated_at}</td>
                            <td><Link to={`/${username}/${item.name}`} className='readme-link'>View readme</Link></td>
                        </tr>
                    )
                }
                </tbody>
            </Table>

        </Container>
    );
};

export default Repositories;
//import React, {useEffect, useState} from 'react';
// import {useParams} from "react-router-dom"
// import axios from "axios";
// const Repositories = () => {
//     const {userName} = useParams()
//     const [projects, setProjects] = useState([])
//
//     useEffect(() => {
//         axios(`https://api.github.com/users/${userName}/repos`)
//             .then(({data}) => setProjects(data))
//     }, [])
//     return (
//         <div>
//             {
//                 projects.map(item =>
//                     <h4>{item.name}</h4>
//                 )
//             }
//         </div>
//     );
// };
//
// export default Repositories;
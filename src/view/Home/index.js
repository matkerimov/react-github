import React, {useEffect, useState} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Route, useParams} from "react-router-dom";
import Repositories from "../Repositories";
import Readme from "../Readme";
import axios from "axios";

const Home = () => {
    const {username, repos} = useParams()
    const [search, setSearch] = useState('')
    const [readme, setReadme] = useState('')
    const [repositories, setRepositories] = useState([])
    const [user, setUser] = useState({})
    useEffect(() => {
        axios(`https://api.github.com/users/${username}/repos`)
            .then(({data}) => setRepositories(data))

        axios(`https://api.github.com/users/${username}`)
            .then(({data}) => setUser(data))

        if (repos !== undefined){
            axios(`https://api.github.com/repos/${username}/${repos}/readme` ,
                {headers: {'Accept': 'application/vnd.github.html.raw' }})
                .then(({data}) => setReadme(data))
        }
    },  [username, repos])


    return (
        <>
            <Header setSearch={setSearch} user={user}/>
            <Route exact path="/:username">
                <Repositories repositories={repositories} search={search}/>
            </Route>
            <Route exact path="/:username/:repos"><Readme readme={readme}/></Route>
            <Footer />
        </>
    );
};

export default Home;
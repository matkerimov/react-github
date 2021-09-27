import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import "./dasboard.css"

const Dashboard = () => {

    const history = useHistory()
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleCheck = () => {
        if (search.trim()) {
            history.push(`/${search}`)
        }
    }

    return (
        <div className="dashboard d-flex justify-content-center align-items-center">
            <div className="dashboard-card text-center " style={{padding: "64px 96px", borderRadius: "6px"}}>
                <img className=" w-auto" style={{height: "3rem"}} src="https://image.flaticon.com/icons/svg/25/25231.svg" alt=""/>
                <h2 className="mt-3 mb-5 " style={{fontSize: "30px", fontWeight: "800", lineHeight: "36px"}}>User repository search</h2>

                <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-end">
                    <Form className="d-flex ">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="dashboard-input me-2 ms-4 border-2  "
                            aria-label="Search"
                            onChange={handleChange} onKeyPress={el=>{if(el.key==='Enter')handleCheck()}}
                        />
                        <Button   onClick={handleCheck} className="" variant="outline-dark">View </Button>
                    </Form>
                </Navbar.Collapse>
            </div>
        </div>
    );
};

export default Dashboard;

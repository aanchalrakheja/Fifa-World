import React from "react";
import "../css/home-component.css"
import members from "../data.js";
import {Link} from "react-router-dom";

function HomeComponent()
{
    const [Searchfilter,setFilter]= React.useState("name");
    const [input,setInput]=React.useState("");
    const [matchItems,setMatchItems]=React.useState([]);
    function handleFilter(e)
    {
        setFilter(e.target.value);
        setMatchItems([]);
        setInput("");
    }
    function handleChange(e)
    {
        if(e.target.value==="")
        {
            setMatchItems([]);
            setInput("");
        }
        else
        {
            setMatchItems(members.filter(
                (person)=>{
                    return person[Searchfilter].toLowerCase().indexOf(e.target.value.toLowerCase())!==-1;
                })
            );
            setInput(e.target.value);
        }
    }
    return(
        <div className="home">
            <div className="home-component">
                <div className="fifa-heading">FIFA<span>21</span></div>
                <div className="search-filter">
                    <label htmlFor="filter-options">SEARCH BY: </label>
                    <select id="filter-options" name="filter-options" onChange={handleFilter} value={Searchfilter}>
                        <option value="name">Name</option>
                        <option value="club">Club</option>
                        <option value="nationality">Nationality</option>
                        <option value="preferredFoot">Preferred Foot</option>
                    </select>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder={`Enter ${Searchfilter}`} name="searched-input" onChange={handleChange} value={input}></input>
                    <button className="search-button"><i className="fas fa-search"></i></button>
                </div>
            </div>

            <div className="filtered-list">
                <ul>
                    {matchItems.map((player)=>{
                        return(
                            <Link to={`./profile/${player.id}`}>
                                <li className="player" key={player.id}>
                                    {player.name}<br/>
                                    {Searchfilter!=="name" && <span className="search-property">{Searchfilter} : {player[Searchfilter]} </span>}
                                </li>
                            </Link>
                            )
                    })}
                </ul>
                </div>
        </div>
    );
}

export default HomeComponent;
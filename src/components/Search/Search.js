import React from 'react';
import './Search.css';
import { useParams, Link } from 'react-router-dom';
import AllFoods from '../../fakeData/index.js';
import SearchResultShow from '../SearchResultShow/SearchResultShow';


const Search = (props) => {
    const { searchQuery } = useParams();
    const SearchResult = AllFoods.filter(food => food.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
        <section className="food-area my-5">
        <div className="container">
            <h3 className="text-center search-res-title">Search Result</h3>
            <div className="row my-5">
                {
                    SearchResult.map(food => <SearchResultShow key={food.id} food={food}></SearchResultShow> )
                }
                {
                    SearchResult.length === 0 && <h1 className="col-12 display-5 text-center">No food found!</h1>
                }
            </div>

            <div className="text-center">
                <Link to="/">
                    <button className="btn btn-danger">See Our All Foods</button>
                </Link>
            </div>
        </div>
    </section>
    );
};

export default Search;
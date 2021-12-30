import React, {useEffect, useState} from "react";
import Footer from "../common/dashboard/Footer";
import Loader from "react-loader-spinner";
import {THEME_COLOR_CODE} from "../../constants/Constants";

//custom components
import Table from '../common/custom/Table';
import Pagination from "../common/custom/Pagination";

//services
import { getAllPosts } from "../../services/posts-service";

const ViewPosts = (props: any) => {
    const [allPosts, setAllPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [postCount, setPostCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        retrieveAllPosts();
    }, []);

    const retrieveAllPosts = () => {
        setLoader(true);
        getAllPosts()
        .then(posts => {
            setLoader(false);
            setPostCount(posts.length);
            //Rounds upward to its nearest integer
            setTotalPages( Math.ceil(posts.length / perPage));
            setFilteredPosts(paginate(posts, perPage, currentPage+1))
            setAllPosts(posts);
        })
    }

    const paginate = (array: any, page_size : number, page_number: number) => {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    const onPaginationClick = (pageNo: number) => {
        console.log(pageNo);
        if(pageNo >= 0 && pageNo < totalPages ){
            setCurrentPage(pageNo+1);
            setCurrentPage(pageNo);
            setFilteredPosts(paginate(allPosts, perPage, pageNo+1))
        }
    };

    const perPageOnChange = (event: any) => {
        setCurrentPage(0);
        setPerPage(event.target.value);
        setFilteredPosts(paginate(allPosts, event.target.value, 1));
        setTotalPages( Math.ceil(allPosts.length / event.target.value));
    };

    return (
        <div>
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <div className="row g-3 mb-4 align-items-center justify-content-between">
                            <div className="col-auto">
                                <h1 className="app-page-title mb-0" data-testid="postCountIndicator">{postCount} Total Posts | Page {currentPage+1} / {totalPages}</h1>
                            </div>
                            <div className="col-auto">
					            <div className="page-utilities">
                                    <select className="form-select w-auto" onChange={perPageOnChange}>
                                        <option defaultValue={10} value="10">10</option>
                                        <option value="30">30</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
									</select>
                                </div>
                                <div hidden={true}>
                                    <button data-testid={"hiddenBtn"}>
                                        Hidden button
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4"/>
                        {
                            !loader ? (
                                <div>
                                    <Table filteredPosts={filteredPosts} headers={['#', 'Title', 'Body']}/>
                                    <Pagination allPosts={allPosts} onPaginationClick={onPaginationClick}
                                                currentPage={currentPage} totalPages={totalPages} />
                                </div>
                            ) : (
                                <div className="col-12 text-center mt-4 mb-4">
                                    <Loader type="Bars" color={THEME_COLOR_CODE} height={40} width={90} />
                                </div>
                            )
                        }
                    </div>
                </div>

                <Footer props={props} />
            </div>
        </div>
    );
}

export default ViewPosts;

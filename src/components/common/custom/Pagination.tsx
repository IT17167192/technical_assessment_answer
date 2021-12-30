import React, {useEffect} from "react";

const Pagination = (props: any) => {
    useEffect(() => {
        console.log(props.allPosts.length);
    }, [props.currentPage, props.allPosts.length])


    const createPagination = (totalPages: number) => {
        let pagination = [];
        for (let i = 0; i < totalPages; i++){
            pagination.push(<li key={i} style={{cursor: 'pointer'}} className={props.currentPage === i ? "page-item active" : "page-item"}><a className="page-link" onClick={() => props.onPaginationClick(i)}>{i+1}</a></li>);
        }

        return (
            <ul className="pagination justify-content-center">
                <li className={props.currentPage === 0 ? "page-item disabled" : "page-item"} onClick={() => props.onPaginationClick((props.currentPage-1))}>
                    <div className="page-link" style={{cursor: 'pointer'}}>Previous</div>
                </li>
                {pagination}
                <li className={props.currentPage+1 === totalPages ? "page-item disabled" : "page-item"} onClick={() => props.onPaginationClick(props.currentPage+1)}>
                    <div className="page-link" style={{cursor: 'pointer'}}>Next</div>
                </li>
            </ul>
        );
    };

    return (
        <div className="row mt-3">
            <div className="col-12">
                <nav className="app-pagination mt-5">
                    {props.allPosts.length > 0 ? createPagination(props.totalPages) : ''}
                </nav>
            </div>
        </div>
    );
}

export default Pagination;

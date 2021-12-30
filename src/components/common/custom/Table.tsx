import React from "react";


const Table = (props: any) => {
    return (
        <div className="tab-content" id="orders-table-tab-content">
            <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
                <div className="app-card app-card-orders-table mb-5">
                    <div className="app-card-body">
                        <div className="table-responsive">

                            <table className="table mb-0 text-left">
                                <thead>
                                <tr>
                                    {props.headers.map((header: any) => (
                                        <th key={header} className="cell">{header}</th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.filteredPosts.map((p: any) => (
                                        <tr key={p.id}>
                                            <td className="cell">{p.id}</td>
                                            <td className="cell">{p.title}</td>
                                            <td className="cell">{p.body}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;

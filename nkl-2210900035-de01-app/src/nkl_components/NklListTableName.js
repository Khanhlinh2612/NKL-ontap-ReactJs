import React from 'react';

export default function NklListTableName({ renderNklListTableName, onNklDelete, onNklEdit }) {

    const nklHandleDelete = (nklId) => {
        if (window.confirm('Bạn có muốn xóa dữ liệu nklId ' + nklId)) {
            onNklDelete(nklId);
        }
    };

    const nklHandleEdit = (nklOjbTableName) => {
        onNklEdit(nklOjbTableName);
    };

    const nklElementTableName = renderNklListTableName.map((nklItem, nklIndex) => {
        return (
            <tr key={nklIndex}>
                <td>{nklItem.nklId}</td>
                <td>{nklItem.nklTbName}</td>
                <td>{nklItem.nklTbEmail}</td>
                <td>{nklItem.nklTbPhone}</td>
                <td>{(nklItem.nklTbStatus === true || nklItem.nklTbStatus === "true") ? "Active" : "Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'
                        onClick={() => nklHandleEdit(nklItem)}
                    >Edit</button>
                    <button className='btn btn-danger'
                        onClick={() => nklHandleDelete(nklItem.nklId)}
                    >Delete</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách thông tin...</h2>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>nklId</th>
                        <th>nklTbName</th>
                        <th>nklTbEmail</th>
                        <th>nklTbPhone</th>
                        <th>nklTbStatus</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {nklElementTableName}
                </tbody>
            </table>
        </div>
    );
}

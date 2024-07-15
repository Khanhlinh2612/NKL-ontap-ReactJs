import React, { useEffect, useState } from 'react';
import axios from './nkl_apis/nkl-2210900035';
import NklListTableName from './nkl_components/NklListTableName';
import NklFormTableName from './nkl_components/NklFormTableName';

export default function NklApp() {
    const [nklListTableName, setNklListTableName] = useState([]);

    const nklGetTableName = async () => {
        try {
            const nklResp = await axios.get("nklTableName");
            console.log("App List:", nklResp.data);
            setNklListTableName(nklResp.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        nklGetTableName();
    }, []);

    const nklHandleDelete = async (nklId) => {
        try {
            await axios.delete("nklTableName/" + nklId);
            nklGetTableName();
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    const [nklTableName, setNklTableName] = useState({
        "nklTbName": "Nguyen Khanh Linh",
        "nklTbEmail": "linhkhanh261258@gmail.com",
        "nklTbPhone": "0123456789",
        "nklTbStatus": true,
        "nklId": "2210900035"
    });

    const nklHandleAdd = () => {
        nklGetTableName();
    };

    const nklHandleEdit = (nklOjbEditTableName) => {
        setNklTableName(nklOjbEditTableName);
    };

    return (
        <div className='container border my-3'>
            <h1>Bài đánh giá học phần - Nguyen Khanh Linh: 2210900035</h1>
            <hr />
            <NklListTableName
                renderNklListTableName={nklListTableName}
                onNklDelete={nklHandleDelete}
                onNklEdit={nklHandleEdit}
            />
            <hr />
            <NklFormTableName rendeNklTableName={nklTableName} onNklAdd={nklHandleAdd} />
        </div>
    );
}

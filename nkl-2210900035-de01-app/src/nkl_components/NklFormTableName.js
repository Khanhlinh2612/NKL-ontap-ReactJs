import React, { useEffect, useState } from 'react';
import axios from '../nkl_apis/nkl-2210900035';

export default function NklFormTableName({ rendeNklTableName, onNklAdd }) {
    const [nklId, setNklId] = useState(rendeNklTableName.nklId);
    const [nklTbName, setNklTbName] = useState(rendeNklTableName.nklTbName);
    const [nklTbEmail, setNklTbEmail] = useState(rendeNklTableName.nklTbEmail);
    const [nklTbPhone, setNklTbPhone] = useState(rendeNklTableName.nklTbPhone);
    const [nklTbStatus, setNklTbStatus] = useState(rendeNklTableName.nklTbStatus);

    useEffect (()=>{
        setNklId(rendeNklTableName.nklId);
        setNklTbName(rendeNklTableName.nklTbName);
        setNklTbEmail(rendeNklTableName.nklTbEmail);
        setNklTbPhone(rendeNklTableName.nklTbPhone);
        setNklTbStatus(rendeNklTableName.nklTbStatus);
    }, [rendeNklTableName]);

    const nklHandleSubmit = async (nklEvent) => {
        nklEvent.preventDefault();
        const nklOjbTableName = {
            "nklTbName": nklTbName,
            "nklTbEmail": nklTbEmail,
            "nklTbPhone": nklTbPhone,
            "nklTbStatus": nklTbStatus,
            "nklId": nklId
        };
        console.log(nklOjbTableName);

        try {
            // Gửi yêu cầu PUT đến API
            await axios.put("nklTableName/" + nklOjbTableName.nklId, nklOjbTableName);
            onNklAdd();
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div>
            <h2>Form xử lý dữ liệu sửa thông tin</h2>
            <form onSubmit={nklHandleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="nklId">nklId</span>
                    <input type="text" className="form-control" placeholder="nklId"
                        name='nklId'
                        value={nklId}
                        onChange={(nklEv) => setNklId(nklEv.target.value)}
                        aria-label="nklId"
                        aria-describedby="nklId" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="nklTbName">nklTbName</span>
                    <input type="text" className="form-control" placeholder="nklTbName"
                        name='nklTbName'
                        value={nklTbName}
                        onChange={(nklEv) => setNklTbName(nklEv.target.value)}
                        aria-label="nklTbName"
                        aria-describedby="nklTbName" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="nklTbEmail">nklTbEmail</span>
                    <input type="text" className="form-control" placeholder="toiduaroima@gmail.com"
                        name='nklTbEmail'
                        value={nklTbEmail}
                        onChange={(nklEv) => setNklTbEmail(nklEv.target.value)}
                        aria-label="nklTbEmail"
                        aria-describedby="nklTbEmail" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="nklTbPhone">nklTbPhone</span>
                    <input type="text" className="form-control" placeholder="1234567890"
                        name='nklTbPhone'
                        value={nklTbPhone}
                        onChange={(nklEv) => setNklTbPhone(nklEv.target.value)}
                        aria-label="nklTbPhone"
                        aria-describedby="nklTbPhone" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="nklTbStatus">nklTbStatus</span>
                    <select className='form-control'
                        name='nklTbStatus'
                        value={nklTbStatus}
                        onChange={(nklEv) => setNklTbStatus(nklEv.target.value)}
                    >
                        <option value={true} >Active</option>
                        <option value={false} >Non-Active</option>
                    </select>
                </div>
                <button className='btn btn-primary my-3' type="submit">Nkl: Save</button>
            </form>
        </div>
    );
}

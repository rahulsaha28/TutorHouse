import React, { useContext } from 'react';
import { Icon, Table } from 'rsuite';
import { TutorContext } from '../../../App';
import { serverURL } from '../../Config/Config';
import { EditMessage } from '../../utility/Message';

const ManageService = () => {

    const { Column, Cell, HeaderCell } = Table;

    // load all course
    const { courses, setCourses, user } = useContext(TutorContext) 
    
    const handelDelete = id=>{
        fetch(`${serverURL}product`, {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "type":user.type
            },
            body:JSON.stringify({id})
        })
        .then(res=>res.json())
        .then(result=>{
            // course reset here
            fetch(`${serverURL}product`)
            .then(newRes=>newRes.json())
            .then(newResult=>setCourses(newResult.product))

            result?.success?EditMessage("success",result?.success):EditMessage("error", result?.error);
        })
    }

    return (
        <div>
            {
                courses?.length>0?
                (
                    <Table height={300} data={courses} rowHeight={70}>
                    <Column width={140}>
                            <HeaderCell>Img</HeaderCell>
                            <Cell>
                                {
                                    rowData=>{
                                        return (
                                            <img src={rowData?.imageURL} style={{ width:"50px", height:"50px", borderRadius:"50%" }} alt=""/>
                                        )
                                    }
                                }
                            </Cell>
                        </Column>
                        <Column width={140}>
                            <HeaderCell>Title</HeaderCell>
                            <Cell dataKey="title"/>
                        </Column>
                        <Column width={140}>
                            <HeaderCell>Price</HeaderCell>
                            <Cell dataKey="price"/>
                        </Column>
                        <Column width={140}>
                            <HeaderCell>Action</HeaderCell>
                            <Cell>
                                {
                                    rowData=>{
                                        return <button onClick={()=>handelDelete(rowData?._id)} className="btn btn-danger"><Icon icon="trash" /></button>
                                    }
                                }
                            </Cell>
                        </Column>
                    </Table>
               
                )
                :
                (
                    <div>No Data Found</div>
                )
            }
         </div>
    );
};

export default ManageService;
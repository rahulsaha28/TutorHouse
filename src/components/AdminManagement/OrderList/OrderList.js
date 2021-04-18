import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Table } from 'rsuite';
import { serverURL } from '../../Config/Config';
import 'rsuite/dist/styles/rsuite-default.css';
import { TutorContext } from '../../../App';

const OrderList = () => {

    const { Column, HeaderCell, Cell } = Table

    const [cart, setCart] = useState([]);
    const { user } = useContext(TutorContext);

    useEffect(() => {
        fetch(`${serverURL}cart/all`, { method: "POST", 
        headers:{
            "Content-Type":"application/json",
            "type":user.type
        } })
            .then(res => res.json())
            .then(({ cart }) => setCart(cart))
    }, [])

    const statusOnChange = (id, value) => {

        fetch(`${serverURL}cart/status`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                status: value
            })

        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {

                    fetch(`${serverURL}cart/all`, { method: "POST", 
                    headers:{
                        "Content-Type":"application/json",
                        "type":user.type
                    } })
                        .then(res => res.json())
                        .then(({ cart }) => setCart(cart))
                }
            })

    }

    return (
        <div>
            <Table height={400} data={cart} rowHeight={150}>
                <Column>
                    <HeaderCell>Invoice</HeaderCell>
                    <Cell dataKey="_id" />
                </Column>
                <Column width={200}>
                    <HeaderCell>Email</HeaderCell>
                    <Cell dataKey="email" />
                </Column>
                <Column width={200}>
                    <HeaderCell>Course</HeaderCell>
                    <Cell>
                        {
                            rowData => {
                                return rowData?.products[0].title
                            }
                        }
                    </Cell>
                </Column>
                <Column width={200}>
                    <HeaderCell>Date</HeaderCell>
                    <Cell>
                        {
                            rowData => {
                                return rowData?.date
                            }
                        }
                    </Cell>
                </Column>
                <Column width={200}>
                    <HeaderCell>Status</HeaderCell>
                    <Cell>
                        {

                            rowData => {
                                const allStatus = [
                                    {
                                        "status": "Pending",
                                        "color": "#EA6C79"
                                    },
                                    {
                                        "status": "On Going",
                                        "color": "yellow"
                                    },
                                    {
                                        "status": "Done",
                                        "color": "#2589F5"
                                    }

                                ]





                                return (
                                    <Dropdown style={{ backgroundColor: `${allStatus.find(result => result.status === rowData?.status).color}` }} title={<span style={{ color: "#fff" }}>{rowData?.status}</span>}>
                                        {
                                            allStatus.filter(result => result.status !== rowData?.status).map(result => <Dropdown.Item key={Math.random()}><button className="btn" style={{ backgroundColor: `${result.color}` }} onClick={() => statusOnChange(rowData?._id, result.status)} >{result.status}</button></Dropdown.Item>)
                                        }
                                    </Dropdown>
                                    // <div>{c}</div>
                                )
                            }
                        }
                    </Cell>
                </Column>
            </Table>
        </div>
    );
};

export default OrderList;
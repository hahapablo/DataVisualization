import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {ResponsiveBar}  from '@nivo/bar'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Legend, Label, LabelList } from 'recharts';

import DataTableView from './DataTable';

const NivoBar = () => {

    const data01 = [
        { x: 13.11, y: 12.88, name:"Index1" },
        { x: 11.11, y: 13.21, name:"Index2" },
        { x: 20.01, y: 18.41, name:"Index3"  },
        { x: 13.57, y: 19.10, name:"Index4" },
      ];

    return(
        <>
        <CCard>
            <CCardHeader>
                <CRow>
                    <CCol sm={6} style={{fontSize:13}}>
                        <h8>Index</h8>
                    </CCol>
                </CRow>
                
            </CCardHeader>
            <CCardBody>
                <ResponsiveContainer width="90%" height={400}>
                    <ScatterChart
                      margin={{
                        top: 20 ,
                        right: 0,
                        bottom: 20,
                        left: 10,
                      }}
                    >
                      <CartesianGrid />
                      <XAxis type="number" dataKey="x" name="Risk" unit="%" style={{ fontSize: 12 }} >
                        <Label value = "Risk" position ="bottom" dataKey="x" style={{ fontSize: 12 }} ></Label>
                      </XAxis> 

                      <YAxis type="number" dataKey="y" name="Return" unit="%" style={{ fontSize: 12 }} >
                        <Label value = "Return" offset={-10} angle="-90" position="left" dataKey="y" style={{ fontSize: 12 }} ></Label>
                      </YAxis>

                      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                      
                      <Scatter name="2023" data={data01} fill="#8884d8" >
                        <LabelList dataKey="name" position="left" width={250} style={{fontSize: 13, fill:"grey" }} />
                        {data01.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={"#8884d8"}>
                              
                          </Cell>
                        ))}
                      </Scatter>
                    </ScatterChart>
                </ResponsiveContainer>
            </CCardBody>
        </CCard>
        </>
    )
}
export default NivoBar

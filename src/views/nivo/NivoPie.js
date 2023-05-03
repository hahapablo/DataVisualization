import React, {useState} from 'react'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Legend, Label, LabelList } from 'recharts';

const NivoPie = () => {

    const data01 = [
        { x: 3.11, y: 11.00, name:"Index1" },
        { x: 12.09, y: 14.98, name:"Index2" },
        { x: 12.40, y: 2.22, name:"Index3"  },
        { x: 5.66, y: 7.18, name:"Index4" },
        { x: 18.88, y: 16.66, name:"Index5" },
      ];

    return(
        <>
        <CCard>
            <CCardHeader>
                <CRow>
                    <CCol sm={6} style={{fontSize:13}}>
                        <span>FCF Weighted Index</span>
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
export default NivoPie

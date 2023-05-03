import React, {useState} from "react";
import PropTypes from 'prop-types'
import { ResponsiveFunnel } from "@nivo/funnel";
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'
import {SchemeOptions} from './ColorSchemeOptions'
import Select from "react-select"
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Legend, Label, LabelList } from 'recharts';


const NivoFunnel = () => {

    const data01 = [
        { x: 11.50, y: 12.99, name:"Index1" },
        { x: 16.99, y: 14.59, name:"Index2" },
        { x: 15.53, y: 12.28, name:"Index3"  },
        { x: 14.53, y: 11.79, name:"Index4" },
        { x: 13.22, y: 10.95, name:"Index5" },
      ];
    
    return(
        <>
        <CCard>
            <CCardHeader>
                <CRow>
                    <CCol sm={6} style={{fontSize:13}}>
                        <span>Index</span>
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
                        <LabelList dataKey="name" position="left" angle={0} width={300} style={{fontSize: 12, fill:"grey" }} />
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
export default NivoFunnel;

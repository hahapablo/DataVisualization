/* eslint-disable react/prop-types */

import React from 'react'
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CContainer,
  CFormSelect,
  CTableRow,
  CTable,
  CTableDataCell,
  CTableHeaderCell,
  CTableHead,
  CTableBody
} from '@coreui/react'

import { Bar, BarChart, ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Cell, Legend, Label, LabelList } from 'recharts';


const Dashboard = () => {

  const [selection1, setSelection1] = useState('Returns vs. Risk')
  const [selection2, setSelection2] = useState('#1 Index')

  const handleOnChangeSelection1 = (e) => {
    setSelection1(e.target.value);
  };

  const handleOnClickSelectoin2 = (e) => {
    setSelection2(e.target.value);
  };

  const data01 = [
    { name:"#1 Level-A Index", x: 11.09, y: 12.99},
    { name:"#1 Level-B Index", x: 13.00, y: 20.00},
    { name:"#1 Level-C Index", x: 20.03, y: 10.88},
    { name:"#1 Level-D Index", x: 6.11, y: 8.80 },
  ];

  const data02 = [
    { name:"#2 Level-A Index", x: 15.11, y: 3.88},
    { name:"#2 Level-B Index", x: 12.22, y: 19.11},
    { name:"#2 Level-C Index", x: 23.33, y: 20.22},
    { name:"#2 Level-E Index", x: 14.44 , y: 8.53 },
    { name:"#2 Level-F Index", x: 11.55, y: 16.77 },
  ];

  const data03 = [
    { name:"#3 Level-A Index", x: 12.11, y: 22.11 },
    { name:"#3 Level-B Index", x: 15.11, y: 13.17 },
    { name:"#3 Level-C Index", x: 20.11, y: 13.11 },
    { name:"#3 Level-D Index", x: 19.11, y: 11.11 },
  ];

  const data04 = [
    { name:"#4 Level-G Index", x: 13.22, y: 12.11 },
    { name:"#4 Level-H Index", x: 16.33, y: 19.22 },
    { name:"#4 Value Index", x: 15.44, y: 12.33 },
    { name:"#4 Level-I Index", x: 14.77, y: 13.66, },
    { name:"#4 Level-J Index", x: 33.88, y: 11.99 },
  ];

  const databar = [
    {x: "#1 Level-A Index", y: 20.11, fill:"#34a8eb"},
    {x: "#1 Level-B Index", y: 14.23, fill:"#34a8eb"},
    {x: "#1 Level-C Index", y: 13.44, fill:"#34a8eb"},
    {x: "#1 Level-D Index", y: 11.55, fill:"#34a8eb"},

    {x: "#2 Level-A Index", y: 10.76, fill: "#00C49F"},
    {x: "#2 Level-B Index", y: 12.34, fill: "#00C49F"},
    {x: "#2 Level-C Index", y: 14.51, fill: "#00C49F"},
    {x: "#2 Level-E Index", y: 33.00, fill: "#00C49F"},
    {x: "#2 Level-F Index", y: 21.23, fill: "#00C49F"},

    {x: "#3 Level-A Index", y: 20.11, fill: "#E5EEC1"},
    {x: "#3 Level-B Index", y: 12.27, fill: "#E5EEC1"},
    {x: "#3 Level-C Index", y: 15.40, fill: "#E5EEC1"},
    {x: "#3 Level-D Index", y: 21.07, fill: "#E5EEC1"},

    {x: "#4 Level-G Index", y: 12.68, fill: "#558E84"},
    {x: "#4 Level-H Index", y: 19.59, fill: "#558E84"},
    {x: "#4 Value Index", y: 12.28, fill: "#558E84"},
    {x: "#4 Level-I Index", y: 12.12, fill: "#558E84"},
    {x: "#4 Level-J Index", y: 9.11, fill: "#558E84"},
  ]

  const datasharpe = [
    {x: "#1 Level-A Index", y: 0.42, fill:"#34a8eb"},
    {x: "#1 Level-B Index", y: 0.51, fill:"#34a8eb"},
    {x: "#1 Level-C Index", y: 0.65, fill:"#34a8eb"},
    {x: "#1 Level-D Index", y: 0.41, fill:"#34a8eb"},

    {x: "#2 Level-A Index", y: 0.97, fill: "#00C49F"},
    {x: "#2 Level-B Index", y: 0.24, fill: "#00C49F"},
    {x: "#2 Level-C Index", y: 0.44, fill: "#00C49F"},
    {x: "#2 Level-E Index", y: 0.55, fill: "#00C49F"},
    {x: "#2 Level-F Index", y: 0.88, fill: "#00C49F"},

    {x: "#3 Level-A Index", y: 0.71, fill: "#E5EEC1"},
    {x: "#3 Level-B Index", y: 0.44, fill: "#E5EEC1"},
    {x: "#3 Level-C Index", y: 0.55, fill: "#E5EEC1"},
    {x: "#3 Level-D Index", y: 0.77, fill: "#E5EEC1"},

    {x: "#4 Level-G Index", y: 0.42, fill: "#558E84"},
    {x: "#4 Level-H Index", y: 0.66, fill: "#558E84"},
    {x: "#4 Value Index", y: 0.55, fill: "#558E84"},
    {x: "#4 Level-I Index", y: 0.42, fill: "#558E84"},
    {x: "#4 Level-J Index", y: 0.01, fill: "#558E84"},
  ]

  const legends = [
    {
      color: "#34a8eb",
      value: "#1 Index",
    },
    {
      color: "#00C49F",
      value: "#2 Index",
    },
    {
      color: "#E5EEC1",
      value: "#3 Index",
    },
    {
      color: "#558E84",
      value: "#4 Index",
    },
  ]

  const CustomizedLegend = ({ payload }) => (
    <div style={{display: ''}}>
      {payload.map((entry, index) => (
        <div key={`item-${index}`}>
          <span style={{ color: entry.color }}>■</span>
          {entry.value}
        </div>
      ))}
    </div>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{fontSize: 14, backgroundColor: 'white', display: "inline-block", padding: 10 }}>
          <div className="value" style={{fontWeight: 'bold'}}>{`${payload[2].value}`}</div>
          <div className="value">{`${payload[1].name} : ${payload[1].value}%`}</div>
          <div className="value">{`${payload[0].name} : ${payload[0].value}%`}</div>
        </div>
      );
    }
    return null;
  };


  CustomizedLegend.propTypes = {
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  return (
    <>
      {/* <WidgetsDropdown /> */}
      <CContainer>
        <CRow>
          <CCol lg="9">
            <CCard className="mb-4">
            <CCardHeader>Data</CCardHeader>
              <CCardBody>
                <CRow className="justify-content-center">
                    <CButtonGroup className="me-3" >
                      <CButton
                          color="outline-secondary"
                          key={1}
                          value = 'Returns vs. Risk'
                          className="mx-0"
                          active={selection1 === 'Returns vs. Risk'}
                          size = "sm"
                          style={{fontSize: 14}}
                          onClick={handleOnChangeSelection1}
                        >
                          Returns vs. Risk
                      </CButton>
                      <CButton
                          color="outline-secondary"
                          key={2}
                          value = 'Return Comparision'
                          className="mx-0"
                          active={selection1 === 'Return Comparision'}
                          size = "sm"
                          style={{fontSize: 14}}
                          onClick={handleOnChangeSelection1}
                        >
                          Return Comparision
                      </CButton>
                      <CButton
                          color="outline-secondary"
                          key={3}
                          value = 'Sharpe Ratio'
                          className="mx-0"
                          active={selection1 === 'Sharpe Ratio'}
                          size = "sm"
                          style={{fontSize: 14}}
                          onClick={handleOnChangeSelection1}
                        >
                          Sharpe Ratio
                      </CButton>
                    </CButtonGroup>
                </CRow>
                
                <CRow className="justify-content-center" >
                    <div>                    
                      { selection1 === "Returns vs. Risk" ? 
                        <div>
                        <ResponsiveContainer width="90%" height={500}>
                          <ScatterChart
                            margin={{
                              top: 20 ,
                              right: 0,
                              bottom: 40,
                              left: 10,
                            }}
                          >
                            <CartesianGrid />
                            <XAxis type="number" dataKey="x" name="Annualized Risk" unit="%" style={{ fontSize: 13 }} >
                              <Label value = "Annualized Risk" position ="bottom" dataKey="x" style={{ fontSize: 13 }} ></Label>
                            </XAxis> 
      
                            <YAxis type="number" dataKey="y" name="Annualized Return" unit="%" style={{ fontSize: 13 }} >
                              <Label value = "Annualized Return" offset={-10} angle="-90" position="left" dataKey="y" style={{ fontSize: 13 }} ></Label>
                            </YAxis>

                            <ZAxis dataKey="name" name="z" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                            
                            <Scatter name="#1 Index" data={data01} fill="#34a8eb" >
                              <LabelList/>
                              {data01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={"#34a8eb"}>
                                    
                                </Cell>
                              ))}
                            </Scatter>
      
                            <Scatter name="#2 Index" data={data02} fill="#00C49F" >
                              <LabelList/>
                              {data02.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={"#00C49F"}>
                                    
                                </Cell>
                              ))}
                            </Scatter>
                            {/* <LabelList dataKey="name" position="right" width={250}  style={{ fontSize: 8, fill:"grey" }} angle="45" /> */}

                            <Scatter name="#3 Index" data={data03} fill="#E5EEC1" >
                              <LabelList />
                              {data03.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={"#E5EEC1"}>
                                    
                                </Cell>
                              ))}
                            </Scatter>
      
                            <Scatter name="#4 Index" data={data04} fill="#558E84" >
                              <LabelList />
                              {data04.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={"#558E84"}>
                                    
                                </Cell>
                              ))}
                            </Scatter>
                            <Legend wrapperStyle={{fontSize: "11px", transform: 'translate(0px,25px)'}} verticalAlign="bottom"/>
                          </ScatterChart>
                        </ResponsiveContainer>
                        <CRow></CRow>
                        <CTable striped style={{fontSize: 13, alignContent: 'center'}} className="text-center">
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell scope="col">My Index</CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                <div>Annualized</div>
                                <div>Return (%)</div>
                              </CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                <div>Annualized</div>
                                <div>Risk (%)</div></CTableHeaderCell>
                              <CTableHeaderCell scope="col">
                                <div>Sharpe</div>
                                <div>Ratio</div>
                              </CTableHeaderCell>
                              <CTableHeaderCell scope="col">Index Group</CTableHeaderCell>

                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#1 Level-A Index</CTableHeaderCell>
                              <CTableDataCell>11.11</CTableDataCell>
                              <CTableDataCell>22.22</CTableDataCell>
                              <CTableDataCell>0.30</CTableDataCell>
                              <CTableDataCell>#1 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#1 Level-B Index</CTableHeaderCell>
                              <CTableDataCell>14.00</CTableDataCell>
                              <CTableDataCell>11.22</CTableDataCell>
                              <CTableDataCell>0.90</CTableDataCell>
                              <CTableDataCell>#1 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#1 Level-C Index</CTableHeaderCell>
                              <CTableDataCell>14.88</CTableDataCell>
                              <CTableDataCell>20.11</CTableDataCell>
                              <CTableDataCell>0.60</CTableDataCell>
                              <CTableDataCell>#1 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#1 Level-D Index</CTableHeaderCell>
                              <CTableDataCell>11.00</CTableDataCell>
                              <CTableDataCell>14.20</CTableDataCell>
                              <CTableDataCell>0.54</CTableDataCell>
                              <CTableDataCell>#1 Index</CTableDataCell>
                            </CTableRow>

                            <CTableRow>
                              <CTableHeaderCell scope="row">#2 Level-A Index</CTableHeaderCell>
                              <CTableDataCell>8.11</CTableDataCell>
                              <CTableDataCell>15.76</CTableDataCell>
                              <CTableDataCell>0.50</CTableDataCell>
                              <CTableDataCell>#2 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#2 Level-B Index</CTableHeaderCell>
                              <CTableDataCell>10.00</CTableDataCell>
                              <CTableDataCell>13.00</CTableDataCell>
                              <CTableDataCell>0.5</CTableDataCell>
                              <CTableDataCell>#2 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#2 Level-C Index</CTableHeaderCell>
                              <CTableDataCell>11.11</CTableDataCell>
                              <CTableDataCell>22.22</CTableDataCell>
                              <CTableDataCell>0.55</CTableDataCell>
                              <CTableDataCell>#2 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#2 Level-E Index</CTableHeaderCell>
                              <CTableDataCell>9.99</CTableDataCell>
                              <CTableDataCell>7.79</CTableDataCell>
                              <CTableDataCell>0.33</CTableDataCell>
                              <CTableDataCell>#2 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#2 Level-F Index</CTableHeaderCell>
                              <CTableDataCell>11.11</CTableDataCell>
                              <CTableDataCell>22.22</CTableDataCell>
                              <CTableDataCell>0.33</CTableDataCell>
                              <CTableDataCell>#2 Index</CTableDataCell>
                            </CTableRow>

                            <CTableRow>
                              <CTableHeaderCell scope="row">#3 Level-A Index</CTableHeaderCell>
                              <CTableDataCell>13.33</CTableDataCell>
                              <CTableDataCell>15.55</CTableDataCell>
                              <CTableDataCell>0.77</CTableDataCell>
                              <CTableDataCell>#3 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#3 Level-B Index</CTableHeaderCell>
                              <CTableDataCell>11.11</CTableDataCell>
                              <CTableDataCell>19.99</CTableDataCell>
                              <CTableDataCell>0.99</CTableDataCell>
                              <CTableDataCell>#3 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#3 Level-C Index</CTableHeaderCell>
                              <CTableDataCell>11.11</CTableDataCell>
                              <CTableDataCell>12.22</CTableDataCell>
                              <CTableDataCell>0.66</CTableDataCell>
                              <CTableDataCell>#3 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#3 Level-D Index</CTableHeaderCell>
                              <CTableDataCell>11.11</CTableDataCell>
                              <CTableDataCell>12.22</CTableDataCell>
                              <CTableDataCell>0.55</CTableDataCell>
                              <CTableDataCell>#3 Index</CTableDataCell>
                            </CTableRow>

                            <CTableRow>
                              <CTableHeaderCell scope="row">#4 Level-G Index</CTableHeaderCell>
                              <CTableDataCell>11.00</CTableDataCell>
                              <CTableDataCell>12.22</CTableDataCell>
                              <CTableDataCell>0.44</CTableDataCell>
                              <CTableDataCell>#4 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#4 Level-H Index</CTableHeaderCell>
                              <CTableDataCell>11.11</CTableDataCell>
                              <CTableDataCell>22.22</CTableDataCell>
                              <CTableDataCell>0.33</CTableDataCell>
                              <CTableDataCell>#4 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#4 Value Index</CTableHeaderCell>
                              <CTableDataCell>33.33</CTableDataCell>
                              <CTableDataCell>4.44</CTableDataCell>
                              <CTableDataCell>0.11</CTableDataCell>
                              <CTableDataCell>#4 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#4 Level-I Index</CTableHeaderCell>
                              <CTableDataCell>2.22</CTableDataCell>
                              <CTableDataCell>3.23</CTableDataCell>
                              <CTableDataCell>0.11</CTableDataCell>
                              <CTableDataCell>#4 Index</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                              <CTableHeaderCell scope="row">#4 Level-J Index</CTableHeaderCell>
                              <CTableDataCell>11.11</CTableDataCell>
                              <CTableDataCell>2.22</CTableDataCell>
                              <CTableDataCell>0.33</CTableDataCell>
                              <CTableDataCell>#4 Index</CTableDataCell>
                            </CTableRow>

                          </CTableBody>
                        </CTable>
                        </div>
                        :
                        <div/>
                      }
                    </div>

                    <div>
                    { selection1 === "Return Comparision" ?
                      <ResponsiveContainer width="90%" height={600}>
                         <BarChart width="100%" height={250} data={databar} margin={{
                              top: 30 ,
                              right: 0,
                              bottom: 120,
                              left: 60,
                            }}>
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="x" angle={-45} name="My index" textAnchor="end" style={{ fontSize: 10 }} interval={0}>
                           </XAxis>

                           <YAxis dataKey="y" type="number" name="Annualized Return" unit="%" style={{ fontSize: 12 }}>
                            <Label value = "Annualized Return" offset={-10} angle="-90" position="left" style={{ fontSize: 12 }} ></Label>
                           </YAxis>

                           <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                           <Legend content={<CustomizedLegend />} payload={legends} align="right" verticalAlign="bottom" wrapperStyle={{color: "grey", fontSize: "12px",transform: 'translate(75%,110px)'}}/>
                           <Bar dataKey="y" barSize={15}>
                              {databar.map((entry,index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill}/>

                              ))}
                           </Bar>

                         </BarChart>
                        </ResponsiveContainer>
                        : 
                        <div />
                      }
                      </div>
                  
                    <div>
                    { selection1 === "Sharpe Ratio" ?
                      <ResponsiveContainer width="90%" height={600}>
                         <BarChart width="100%" height={250} data={datasharpe} margin={{
                              top: 30 ,
                              right: 0,
                              bottom: 120,
                              left: 60,
                            }}>
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="x" angle={-45} name="My index" textAnchor="end" style={{ fontSize: 10 }} interval={0}>
                           </XAxis>

                           <YAxis dataKey="y" type="number" style={{ fontSize: 12 }}>
                            <Label value = "Sharpe Ratio" offset={-10} angle="-90" position="left" style={{ fontSize: 12 }} ></Label>
                           </YAxis>

                           <Tooltip />
                           <Legend content={<CustomizedLegend />} payload={legends} align="middle" verticalAlign="bottom" wrapperStyle={{color: "grey", fontSize: "12px",transform: 'translate(75%,110px)'}}/>
                           <Bar dataKey="y" barSize={15}>
                              {databar.map((entry,index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill}/>

                              ))}
                           </Bar>

                         </BarChart>
                        </ResponsiveContainer>
                        : 
                        <div />
                      }
                      </div>
                  

                </CRow>

              </CCardBody>
            </CCard>
          </CCol>

          <CCol sm="3">
            <CCard className="mb-4">
            
             <CCardHeader>My Index Details</CCardHeader>
              <CCardBody>
                <CRow>
                  <p>
                    <CFormSelect 
                        style={{fontSize: 14}}
                        aria-label="Default select example"
                        options={[
                          { label: '#1 Index', value: '#1 Index' },
                          { label: '#2 Index', value: '#2 Index' },
                          { label: '#3 Index', value: '#3 Index'},
                          { label: '#4 Index', value: '#4 Index'},
                        ]}
                        onChange={handleOnClickSelectoin2}
                      />
                  </p>
                </CRow>
                <CRow >
                  { selection2 === "#1 Index" ? 
                    <div>
                      <p style={{fontSize: 14}}>
                        <b>#1 Index</b> Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city.
                      </p>
                      <p style={{fontSize: 14}}>
                        <b>#1 Index</b> includes the following My indexes:
                      </p>
                      <CTable striped style={{fontSize: 13, alignContent: 'center'}} className="text-center">
                          <CTableBody>
                            <CTableRow><CTableDataCell>#1 Level-A Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#1 Level-B Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#1 Level-C Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#1 Level-D Index</CTableDataCell></CTableRow>
                            </CTableBody>
                      </CTable>
                    </div> 
                    :
                    <div></div>
                  }
                </CRow>
                <CRow >
                  { selection2 === "#3 Index" ? 
                    <div>
                      <p style={{fontSize: 14}}>
                        <b>#3 Index</b> Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city.                    
                      </p>
                      <p style={{fontSize: 14}}>
                        <b>#3 Index</b> includes the following My indexes:
                      </p>
                      <CTable striped style={{fontSize: 13, alignContent: 'center'}} className="text-center">
                          <CTableBody>
                            <CTableRow><CTableDataCell>#3 Level-A Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#3 Level-B Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#3 Level-C Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#3 Level-D Index</CTableDataCell></CTableRow>
                            </CTableBody>
                      </CTable>
                    </div> 
                    :
                    <div></div>
                  }
                </CRow>
                <CRow >
                  { selection2 === "#2 Index" ? 
                    <div>
                      <p style={{fontSize: 14}}>
                        <b>#2 Index</b> Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city.                      
                      </p>
                      <p style={{fontSize: 14}}>
                        <b>#2 Index</b> includes the following My indexes:
                      </p>
                      <CTable striped style={{fontSize: 13, alignContent: 'center'}} className="text-center">
                          <CTableBody>
                            <CTableRow><CTableDataCell>#2 Level-A Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#2 Level-B Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#2 Level-C Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#2 Level-E Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#2 Level-F Index</CTableDataCell></CTableRow>
                          </CTableBody>
                      </CTable>
                    </div> 
                    :
                    <div></div>
                  }
                </CRow>
                <CRow >
                  { selection2 === "#4 Index" ? 
                    <div>
                      <p style={{fontSize: 14}}>
                        <b>#4 Index</b> Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city.
                      </p>
                      <p style={{fontSize: 14}}>
                        <b>#4 Index</b> includes the following My indexes:
                      </p>
                      <CTable striped style={{fontSize: 13, alignContent: 'center'}} className="text-center">
                          <CTableBody>
                            <CTableRow><CTableDataCell>#4 Level-G Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#4 Level-H Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#4 Value Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#4 Level-I Index</CTableDataCell></CTableRow>
                            <CTableRow><CTableDataCell>#4 Level-J Index</CTableDataCell></CTableRow>
                          </CTableBody>
                      </CTable>
                    </div> 
                    :
                    <div></div>
                  }
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Dashboard

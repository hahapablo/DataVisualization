import React, {useState} from 'react'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'
import p1 from '../../assets/portfolio/panyu/1.png'
import p2 from '../../assets/portfolio/panyu/2.png'
import p3 from '../../assets/portfolio/panyu/3.png'
import p4 from '../../assets/portfolio/panyu/4.png'
import p5 from '../../assets/portfolio/panyu/5.png'


const DesignPanyu = () => {

    return(
        <>
        <CCard>
            <img src={p1} />  
            <img src={p2} />
            <img src={p3} />
            <img src={p4} />            
            <img src={p5} />  
        </CCard>
        </>
    )
}
export default DesignPanyu

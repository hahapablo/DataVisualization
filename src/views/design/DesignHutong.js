import React, {useState} from 'react'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'
import p1 from '../../assets/portfolio/hutong/1.png'
import p2 from '../../assets/portfolio/hutong/2.png'
import p3 from '../../assets/portfolio/hutong/3.png'
import p4 from '../../assets/portfolio/hutong/4.png'
import p5 from '../../assets/portfolio/hutong/5.png'
import p6 from '../../assets/portfolio/hutong/6.png'
import p7 from '../../assets/portfolio/hutong/7.png'
import p8 from '../../assets/portfolio/hutong/8.png'

const DesignHutong = () => {

    return(
        <>
        <CCard>
            <img src={p6} />  
            <img src={p2} />
            <img src={p3} />
            <img src={p4} />            
            <img src={p5} />  
            <img src={p7} />
            <img src={p8} />
            <img src={p1} />
        </CCard>
        </>
    )
}
export default DesignHutong

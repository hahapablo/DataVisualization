import React, {useState} from 'react'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CHeader, CRow } from '@coreui/react'
import p1 from '../../assets/portfolio/others/1.png'
import p2 from '../../assets/portfolio/others/2.png'



const DesignOthers = () => {

    return(
        <>
        <CCard>
            <img src={p1} />  
            <img src={p2} />
        </CCard>
        </>
    )
}
export default DesignOthers

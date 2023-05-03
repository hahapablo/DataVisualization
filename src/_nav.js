import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBarChart,
  cilChartPie,
  cilSpeedometer,
  cilChartLine,
  cilLineWeight,

} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Index',
  },
  {
    component: CNavItem,
    name: 'Graph 1',
    to: '/nivobar',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Graph 2',
    to: '/nivopie',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Graph 3',
    to: '/nivobump',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Graph 4',
    to: '/nivofunnel',
    icon: <CIcon icon={cilLineWeight} customClassName="nav-icon" />,
  },
]

export default _nav

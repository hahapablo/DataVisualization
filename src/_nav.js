import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBarChart,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilChartLine,
  cilLineWeight,
  cilClearAll,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Graphs',
  },
  {
    component: CNavItem,
    name: 'Bar',
    to: '/nivobar',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pie',
    to: '/nivopie',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Bump',
    to: '/nivobump',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Funnel',
    to: '/nivofunnel',
    icon: <CIcon icon={cilLineWeight} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Bullet',
    to: '/nivobullet',
    icon: <CIcon icon={cilClearAll} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Architecture',
  },

  {
    component: CNavTitle,
    name: 'Urban Design',
  },
]

export default _nav

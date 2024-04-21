import React from 'react'
import { useAppContext } from '../../context/appContext'
import { useTheme } from '@mui/material/styles'
import { DefaultTheme } from 'styled-components'

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme: DefaultTheme = useTheme()

  const { darkMode } = useAppContext()
  const styles: React.CSSProperties = {
    width: '40vw',
    height: '70vh',
    minWidth: '320px',
    minHeight: '600px',
    maxWidth: '500px',
    maxHeight: '650px',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: `2px 2px 10px ${theme.palette.app.shadow.first[darkMode]}, -2px -2px 10px ${theme.palette.app.shadow.second[darkMode]}`,
  }

  return <div style={styles}>{children}</div>
}

export default Card

import React from 'react'
import { useAppContext } from '../../context/appContext'

const withAppContext = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const appContext = useAppContext()
    return <WrappedComponent {...props} appContext={appContext} />
  }
}

export default withAppContext

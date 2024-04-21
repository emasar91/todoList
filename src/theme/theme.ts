import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  palette: {
    primary: {
      main: '#FFFFFF',
      dark: '#FFFFFF',
    },
    secondary: {
      main: '#0072CE',
      dark: '#0072CE',
    },
    app: {
      background: { light: '#a9bbd6', dark: '#3a4656' },
      shadow: {
        first: { light: '#6e7a8b', dark: '#262e38' },
        second: { light: '#e4fcff', dark: '#4e5f74' },
      },
      list: { light: '#a9bbd6', dark: '#3a4656' },
    },
    navBar: {
      tasksActions: { light: '#cf2222', dark: '#cf2222' },
      background: { light: '#a9bbd6', dark: '#3a4656' },
      title: { light: '#000000', dark: '#ffffff' },
      themeSelector: {
        active: { light: '#ff8400', dark: '#5ac7ff' },
        inactive: { light: '#e1e8f0', dark: '#2d3949' },
      },
    },
    modal: {
      cancelButton: {
        color: { light: '#ffffff', dark: '#ffffff' },
        background: { light: '#1976d2', dark: '#1976d2' },
      },
    },
    addItem: {
      button: {
        light: '#a9bbd6',
        dark: '#3a4656',
      },
      container: {
        hover: { light: '#5ac7ff', dark: '#5ac7ff' },
      },
      modal: { light: '#a9bbd6', dark: '#3a4656' },
      icon: {
        container: { light: '#06a4f5', dark: '#06a4f5' },
      },
      form: {
        title: { light: '#000000', dark: '#ffffff' },
        radios: {
          none: { light: '#84b6f4', dark: '#84b6f4' },
          mid: { light: '#77dd77', dark: '#77dd77' },
          high: { light: '#ff6961', dark: '#ff6961' },
        },
        button: { light: '#1c68c5', dark: '#84b6f4' },
      },
    },
  },
}
export default theme

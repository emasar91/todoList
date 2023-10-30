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
      background: { light: '#cbd5df', dark: '#718097' },
      list: { light: '#f6fafb', dark: '#3a4656' },
    },
    navBar: {
      background: { light: '#e1e8f0', dark: '#2d3949' },
      title: { light: '#000000', dark: '#ffffff' },
      themeSelector: {
        active: { light: '#5ac7ff', dark: '#5ac7ff' },
        inactive: { light: '#e1e8f0', dark: '#2d3949' },
      },
    },
    addItem: {
      container: {
        hover: { light: '#5ac7ff', dark: '#5ac7ff' },
      },
      modal: { light: '#f6fafb', dark: '#3a4656' },
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
      },
    },
  },
}
export default theme

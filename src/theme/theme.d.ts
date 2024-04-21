import 'styled-components'

interface IThemeMode {
  light: string
  dark: string
}

declare module 'styled-components' {
  interface DefaultTheme {
    palette: {
      primary: {
        light: string
        dark: string
      }
      secondary: {
        light: string
        dark: string
      }
      toolbar: IThemeMode
      app: {
        background: IThemeMode
      }
      navBar: {
        background: IThemeMode
        title: IThemeMode
        themeSelector: {
          active: IThemeMode
          inactive: IThemeMode
        }
      }
      modal: {
        cancelButton: {
          color: IThemeMode
          background: IThemeMode
        }
      }
      addItem: {
        container: {
          hover: IThemeMode
        }
        modal: IThemeMode
        icon: {
          container: IThemeMode
        }
        form: {
          radios: {
            none: IThemeMode
            mid: IThemeMode
            high: IThemeMode
          }
        }
      }
    }
  }
}

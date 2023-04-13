import { type ThemeConfig } from 'antd'

import { type DefaultTheme } from 'styled-components'

import { colors } from '@styles/colors'

export const antDesignTheme: ThemeConfig = {
  token: {
    colorPrimary: colors.primary,
    colorText: colors.tertiary,
    fontFamily: 'Montserrat'
  }
}

export const styledComponentsTheme: DefaultTheme = {
  palette: {
    ...colors
  }
}

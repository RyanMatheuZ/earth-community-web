'use client'

import { type FC, type PropsWithChildren } from 'react'

import { ConfigProvider } from 'antd'

import { ThemeProvider } from 'styled-components'

import { antDesignTheme, styledComponentsTheme } from '@styles/theme'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang="pt-br"
      translate="no"
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"
        />
      </head>
      <body>
        <ConfigProvider
          theme={antDesignTheme}
          direction='ltr'
        >
          <ThemeProvider theme={styledComponentsTheme}>
            {children}
          </ThemeProvider>
        </ConfigProvider>
      </body>
    </html>
  )
}

export default RootLayout

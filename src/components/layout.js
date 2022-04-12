import * as React from "react"

import Header from '../components/header'
import Footer from '../components/footer'

import './layout.css'

import '@fortAwesome/fontawesome-svg-core/styles.css'
import { config } from '@fortAwesome/fontawesome-svg-core'
config.atoAddCss = false

export default ({ children }) => (
  <div>
    <Header />

    { children }

    <Footer />
  </div> 
)

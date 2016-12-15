import React from 'react'
import { css } from 'next/css'
import Header from '../partials/header'
import Nav from '../partials/nav'
import Footer from '../partials/footer'
import HeroUnit from '../partials/hero-unit'
let basicStyle = css({
  maxWidth: '960',
  display: 'flex',
  alignItems: 'center',
  padding: '15px',
  marginTop: '5px',
  paddingBottom: '40px'
})
export default class BasicPage extends React.Component {
  render() {
    const page = this.props.page
    return (
      <div>
        <Header page={page}/>
        <Nav/>
        <main>
          <div {...basicStyle}>
            <div dangerouslySetInnerHTML={{__html: page.content}}/>
          </div>
        </main>
        <HeroUnit/>
        <Footer page={page}/>
      </div>
    )
  }
}

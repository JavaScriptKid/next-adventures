import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Flex} from 'react-flex-material/lib/flex'

const styles = {
  a: {
    marginRight: 10
  }
}

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" href="static/lib/flex.css"/>
    </Head>
    <Flex layout align="space-between center">
      <Flex flex>
        <Link href='/'>
          <a style={styles.a} >Home</a>
        </Link>
      </Flex>
      <Flex divider />
      <Flex flex>
        <Link href='/about'>
          <a style={styles.a} >About</a>
        </Link>
      </Flex>
      <Flex divider />
      <Flex flex>
        <Link href='/hover'>
          <a style={styles.a} >Hover</a>
        </Link>
      </Flex>
      <Flex divider />
      <Flex flex>
        <Link href='/cowsay'>
          <a style={styles.a} >Cowsay</a>
        </Link>
      </Flex>
      <Flex divider />
      <Flex flex>
        <Link href='/gallery'>
          <a style={styles.a} >Gallery</a>
        </Link>
      </Flex>
      <Flex divider />
      <Flex flex>
        <Link href='/profile'>
          <a style={styles.a} >Profile</a>
        </Link>
      </Flex>
    </Flex>
  </div>
)

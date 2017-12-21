import React from 'react'
import { Document, Page, Text, render } from 'react-sketchapp'
import './allIcons.js'

const IconsPage = () => {
  return (
    <Document>
      <Page name="Nothing to see here">
        <Text
          style={{
            fontFamily: 'Helvetica',
            fontSize: 32,
            fontWeight: 'bold',
            fontColor: '#000',
          }}
        >
          See the symbols page
        </Text>
      </Page>
    </Document>
  )
}

const onRun = () => {
  render(<IconsPage />)
}

module.exports = onRun


import React from 'react'
import { Document, Page, View, render } from 'react-sketchapp'
import IconContainer from './IconContainer.js'
import allIcons from './allIcons.js'

const IconsPage = () => {
  const $icons = Object.keys(allIcons).map(iconId => {
    return (
      <IconContainer key={iconId} iconConstructor={allIcons[iconId]} />
    )
  })
  return (
    <Document>
      <Page name="Icons">
        <View>
          {$icons}
        </View>
      </Page>
    </Document>
  )
}

const onRun = () => {
  render(<IconsPage />)
}

module.exports = onRun


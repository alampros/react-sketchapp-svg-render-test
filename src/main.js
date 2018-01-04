import React from 'react'
import { Document, Page, Artboard, View, Text, render } from 'react-sketchapp'
import pkg from '../package.json'
import allIcons from './allIcons.js'

const IconsPage = () => {
  const $icons = Object.keys(allIcons).map(iconMemberName => {
    const iconProps = { name: 'Icon' }
    const IconFactory = allIcons[iconMemberName]
    // Exports are factory classes if ICONS_SKETCH_MAKE_SYMBOLS is true, but elements if not
    const $icon = React.isValidElement(IconFactory)
      ? React.cloneElement(IconFactory, iconProps)
      : <IconFactory {...iconProps} />
    return (
      <View
        style={{
          margin: 20,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 130,
        }}
        name={iconMemberName}
        key={iconMemberName}
      >
        {$icon}
        <Text
          style={{
            textAlign: 'center',
            color: '#ccc',
            fontSize: 12,
            marginTop: 15,
          }}
        >
          {iconMemberName}
        </Text>
      </View>
    )
  })
  return (
    <Document>
      <Page name={pkg.name}>
        <View name="Header" style={{ left: 20, top: 20 }}>
          <Text
            style={{
              fontFamily: 'Helvetica',
              fontSize: 32,
              fontWeight: 'bold',
              color: '#000',
            }}
          >
            ↖︎ See the symbols page
          </Text>
          <Text
            style={{
              fontFamily: 'Consolas',
              fontSize: 56,
              fontWeight: 'bold',
              marginTop: 30,
              color: '#999',
            }}
          >
            {pkg.name}
          </Text>
        </View>
        <Artboard
          name="Icons"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 900,
            left: 20,
            marginTop: 70, // 30 + top + top
          }}
        >
          {$icons}
        </Artboard>
      </Page>
    </Document>
  )
}

const onRun = () => {
  render(<IconsPage />)
}

module.exports = onRun


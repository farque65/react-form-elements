import React, { forwardRef } from 'react'
import { TextBox } from '../'

/**
 * ColorInput Component.
 *
 */
const ColorInput = forwardRef((props, ref) => <TextBox {...props} ref={ref} />)

ColorInput.defaultProps = { type: 'color', label: 'Color Input' }

ColorInput.displayName = 'ReactFormElements(ColorInput)'

export default ColorInput

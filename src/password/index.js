import React, { forwardRef } from 'react'
import { TextBox } from '../'

/**
 * Password Component.
 *
 */
const Password = forwardRef((props, ref) => <TextBox {...props} ref={ref} />)

Password.defaultProps = { type: 'password', label: 'Password' }

Password.displayName = 'ReactFormElements(Password)'

export default Password

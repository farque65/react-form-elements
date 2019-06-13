import React, { forwardRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

/**
 * DropDown Component.
 *
 */
const DropDown = forwardRef(
  (
    {
      name,
      initialValue,
      label,
      type,
      className,
      labelClassName,
      inputClassName,
      children,
      ...otherProps
    },
    ref
  ) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )
    const labelStyleProp =
      labelClassName === ''
        ? {}
        : {
            className: labelClassName,
          }
    const inputStyleProp =
      inputClassName === ''
        ? {}
        : {
            className: inputClassName,
          }
    return (
      <div className={classNames(`rfe-form__row`, className)}>
        <label htmlFor={id} {...labelStyleProp}>
          {label}
        </label>
        <select
          id={id}
          onChange={handleChange}
          onSelect={handleChange}
          value={value}
          ref={inputRef}
          {...otherProps}
          {...inputStyleProp}
        >
          {children}
        </select>
      </div>
    )
  }
)

DropDown.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  initialValue: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
}
DropDown.defaultProps = {
  label: 'label',
  initialValue: '',
  className: '',
  inputClassName: '',
  labelClassName: '',
}
DropDown.displayName = 'ReactFormElements(DropDown)'

export default DropDown

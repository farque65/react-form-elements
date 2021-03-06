import React, { useState } from 'react'
import Highlight from '../utils/highlighter'
import { Button, Form, useFormElement } from '../../../src'
import ErrorBoundry from '../utils/boundry'

const HookedForm = () => {
  const [data, setData] = useState(null)
  const codeString = `
  import React from 'react'
  import {
    useFormElement,
    Button,
    Form,
  } from 'react-form-elements'

  export default () => {

    const { id, value, handleChange, inputRef } = useFormElement('')
    return (<Form
        name="sampleForm"
        onSubmit={values => {
          sendData({ formValues: values })
        }}
      >
        <input
          id={id}
          name="hookedInput"
          type="text"
          value={value}
          onChange={handleChange}
          ref={inputRef}
        />
        <Button>Submit</Button>
      </Form>)
    }
  `

  const { id, value, handleChange, inputRef } = useFormElement('')

  return (
    <ErrorBoundry>
      <main>
        {data && (
          <section>
            <h2 className="mar-b-md mar-t-md">Submitted Data</h2>
            <ul>
              <li>Hook: {data.formValues.hookedInput}</li>
            </ul>
          </section>
        )}
        <section>
          <h2 className="mar-b-md mar-t-md">Hook</h2>
          <div>
            <Form
              name="contactForm"
              onSubmit={values => {
                console.info('From Hooked Input', values.hookedInput)
                setData({ formValues: values })
              }}
            >
              {' '}
              <label htmlFor={id}>
                <h4>Custom Hook Input</h4>
              </label>
              <input
                id={id}
                name="hookedInput"
                type="text"
                value={value}
                onChange={handleChange}
                ref={inputRef}
              />
              <Button>Submit</Button>
            </Form>
          </div>
          <div className="mar-b-md mar-t-md">
            <h3 className="mar-b-md">Code from Example</h3>
            <Highlight>{codeString}</Highlight>
          </div>
        </section>
      </main>
    </ErrorBoundry>
  )
}

export default HookedForm

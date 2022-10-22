import { useState } from 'react'
import { Formik, Form } from 'formik'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Section from './components/Section'
import Balance from './components/Balance'
import { styled } from 'styled-components';

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit

  for(let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  }

  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'UDS',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const App = () => {
  const [balance, setBalance] = useState('')
  const handleSubmit = ({deposit, contribution, years, rate}) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(val))
  }

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="deposit" label="Initial deposit" />
            <Input name="contribution" label="Annual contribution" />
            <Input name="years" label="Years" />
            <Input name="rate" label="Estimated rate" />
            <Button>Calculate</Button>
          </Form>
        </Formik>
        { balance !== '' ? <Balance>Final Balance: {balance}</Balance> : null }
      </Section>
    </Container>
  )
}

export default App
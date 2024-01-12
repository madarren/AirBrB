import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Site } from '../components/Site'
import { BigButton } from '../components/BigButton'
import { ListingCard } from '../components/ListingCard'

const testFn = () => {}
const testData = { title: 'Mock AirBrb', completed: false }

const ids = {
  title: 'title-input',
  price: 'price-input',
  registerBtn: 'register-btn',
  editBtn: 'edit-btn',
  deleteBtn: 'delete-btn'
}

describe('<AirBrb>', () => {
  it('checks the presence of children', () => {
    render(<BigButton data={testData} loginBtn={testFn} />)
    expect(screen.getByTestId(ids.title)).toBeVisible()
    expect(screen.getByTestId(ids.loginBtn)).toBeVisible()
    expect(screen.getByTestId(ids.editBtn)).toBeVisible()
    expect(screen.getByTestId(ids.deleteBtn)).toBeVisible()
  })

  it('checks delete function is called when clicking delete listing', () => {
    const mockDelete = jest.fn()
    render(<ListingCard data={testData} deleteBtn={testFn} deleteTodo={mockDelete}/>)
    userEvent.click(screen.getByTestId(ids.deleteBtn))
    expect(mockDelete).toHaveBeenCalledTimes(1)
  })

  it('checks the ListingCard can render publish prop', () => {
    render(<ListingCard data={testData} />)
    expect(screen.getByTestId(ids.switch)).toBeChecked()
  })

  it('checks the register info is saved when creating a new profile', () => {
    const mockRegister = jest.fn()
    render(<Site data={testData} registerBtn={testFn}/>)
    userEvent.click(screen.getByTestId(ids.registerBtn))
    expect(mockRegister).toHaveBeenCalledTimes(1)
  })
})

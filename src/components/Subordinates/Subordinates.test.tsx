
import React from 'react';
import { render,screen } from '@testing-library/react';
import Subordinates from './Subordinates'
import { MemoryRouter } from 'react-router-dom';


describe('Subordinates', () => {
  it('should render subordinates list', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/', search: '?userId=4' }]}>
        <Subordinates />
      </MemoryRouter>)
       expect(screen.getByText('Subordinates for user(4) Mary Manager')).toBeInTheDocument()
       expect(screen.getByText('[{"Id":2,"Name":"Emily Employee","Role":4},{"Id":3,"Name":"Sam Supervisor","Role":3},{"Id":5,"Name":"Steve Trainer","Role":5}]')).toBeInTheDocument()
    
  })

  it('should render no user when no query param', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/', search: '' }]}>
        <Subordinates />
      </MemoryRouter>)
       expect(screen.getByText('No user')).toBeInTheDocument()
      
    
  })
  it('should render empty array when subordinates for that userid', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/', search: '?userId=2' }]}>
        <Subordinates />
      </MemoryRouter>)
    
       expect(screen.getByText('Subordinates for user(2) Emily Employee')).toBeInTheDocument()
       expect(screen.getByText('[]')).toBeInTheDocument()
      
    
  })
})


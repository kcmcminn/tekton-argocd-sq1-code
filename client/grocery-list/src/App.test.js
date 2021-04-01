import { render, screen, fireEvent } from '@testing-library/react';
import { AddItemForm } from './components/AddItemForm'
import App from './App';


test('renders Grocery List', () => {
  render(<App />);
  const list = screen.getByText(/Grocery List/i);
  expect(list).toBeInTheDocument();
});

test('renders Add button', () => {
    render(<App />);
    const button = screen.getByText(/Add/i);
    expect(button).toBeInTheDocument();
  });

  test('renders Input form', () => {
    render(<App />);
    const form = screen.getByPlaceholderText(/Add your item/i);
    expect(form).toBeInTheDocument();
  });




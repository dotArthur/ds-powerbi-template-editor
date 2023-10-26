import { render, screen } from '@testing-library/react';
import JSONEditor from './JSONEditor';

test('renders JSONEditor component', () => {
  render(<JSONEditor />);
  const jsonEditorElement = screen.getByTestId('json-editor');
  expect(jsonEditorElement).toBeInTheDocument();
});

test('renders JSONEditor component with initial value', () => {
  const initialValue = { name: 'John Doe', age: 30 };
  render(<JSONEditor initialValue={initialValue} />);
  const jsonEditorElement = screen.getByTestId('json-editor');
  expect(jsonEditorElement).toHaveTextContent(JSON.stringify(initialValue));
});

test('updates JSONEditor value on change', () => {
  const initialValue = { name: 'John Doe', age: 30 };
  const updatedValue = { name: 'Jane Doe', age: 25 };
  render(<JSONEditor initialValue={initialValue} />);
  const jsonEditorElement = screen.getByTestId('json-editor');
  jsonEditorElement.value = JSON.stringify(updatedValue);
  expect(jsonEditorElement).toHaveTextContent(JSON.stringify(updatedValue));
});
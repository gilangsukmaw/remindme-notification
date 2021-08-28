import { render, screen } from '@testing-library/react';
import App from './App';

test('RemindMe SignIn Text', () => {
  render(<App />);
  const SignInText = screen.getByText(/To Sign In/i);
  expect(SignInText).toBeInTheDocument();
});
test('RemindMe Carousel', () => {
  render(<App />);
  const ImgText = screen.getByText(/No More Forget/i);
  expect(ImgText).toBeInTheDocument();
});
test('RemindMe Placeholder Email', () => {
  render(<App />);
  const EmailPlaceholder = screen.getByPlaceholderText("Email / Username");
  expect(EmailPlaceholder).toBeInTheDocument();
});
test('RemindMe Placeholder Password', () => {
  render(<App />);
  const PassPlaceholder = screen.getByPlaceholderText(/Password/i);
  expect(PassPlaceholder).toBeInTheDocument();
});
test('RemindMe SignIn Button', () => {
  render(<App />);
  const SignInButton = screen.getByTestId('ButtonSignIn');
  expect(SignInButton).toBeInTheDocument();
});
test('RemindMe Caraousel Img', () => {
  render(<App />);
  const SignInButton = screen.getByTestId('ImgSignIn');
});

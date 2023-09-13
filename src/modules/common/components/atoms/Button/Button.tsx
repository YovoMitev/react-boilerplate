import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = (props: ButtonProps) => <button {...props} />;

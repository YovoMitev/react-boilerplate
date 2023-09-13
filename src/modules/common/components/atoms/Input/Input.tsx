import { InputHTMLAttributes } from 'react';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'crossOrigin'>;
export const Input = (props: InputProps) => <input {...props} />;

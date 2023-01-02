import { InputHTMLAttributes } from 'react';
import * as I from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <I.Wrapper>
      {label && <label className='Label'>{label}</label>}
      <input {...props} type='text' />
    </I.Wrapper>
  );
}

import { useField, useFormikContext } from 'formik';
import React, { InputHTMLAttributes } from 'react';
import { Input } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

function TextField(props: IInputProps) {
  const { name, label, ...rest } = props;
  const formik = useFormikContext();
  const [field, meta] = useField({ name });

  const showError = (meta.touched && meta.error) || Boolean(formik.submitCount);

  const inputProps = {
    ...field,
    id: name,
    disabled: formik.isSubmitting,
    ...rest,
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input {...inputProps} value={meta.value || ''} />
      {showError && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default TextField;

import { useField, useFormikContext } from 'formik';
import React, { memo } from 'react';
import { StyledFormControl } from './styles';
import {
  FormLabel,
  Input as InputChakra,
  FormHelperText,
  InputProps,
} from '@chakra-ui/react';

interface IProps extends InputProps {
  name: string;
  label: string;
}

function Input(props: IProps) {
  const { name, label, ...rest } = props;
  const formik = useFormikContext();
  const [field, meta] = useField({ name });

  const isInvalid = (meta.touched || !!formik.submitCount) && !!meta.error;

  const inputProps = {
    isInvalid,
    ...field,
    id: name,
    disabled: formik.isSubmitting,
    value: meta.value || '',
    ...rest,
  };

  return (
    <StyledFormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputChakra size="sm" {...inputProps} />
      {isInvalid && <FormHelperText>{meta.error}</FormHelperText>}
    </StyledFormControl>
  );
}

export default memo<IProps>(Input);

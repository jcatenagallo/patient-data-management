import { useController, useFormContext } from 'react-hook-form';
import tw from 'twin.macro';
import { ChangeEvent, useCallback } from 'react';

import { ControllersProps } from '@/types/rhf';

const StyledInput = tw.input`
w-full
bg-transparent
text-sm
text-darks-black
placeholder:opacity-50
focus:outline-none
focus:border-grays-shale
border-grays-light
border
rounded-lg
p-2
`;

type Props = ControllersProps & {
  name: string;

  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  validateFields?: string | string[];
  placeholder?: string;
  hiddeContent?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const Input = ({
  name,
  controllerProps,
  onChange,
  validateFields,
  placeholder,
  hiddeContent,
  ...props
}: Props) => {
  const { control, trigger } = useFormContext();
  const { field } = useController({ name, control, ...controllerProps });

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (onChange) onChange?.(e);
      else field.onChange(e);

      if (validateFields) trigger(validateFields);
    },
    [field, onChange, trigger, validateFields]
  );

  return (
    <StyledInput
      {...field}
      {...props}
      autoComplete="off"
      placeholder={placeholder}
      type={props.type}
      value={hiddeContent ? '' : field.value}
      onChange={handleOnChange}
    />
  );
};

export default Input;

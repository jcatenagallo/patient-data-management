import { useController, useFormContext } from 'react-hook-form';
import tw, { styled } from 'twin.macro';
import { ChangeEvent, useCallback } from 'react';

import { ControllersProps } from '@/types/rhf';

const StyledTextArea = styled.textarea`
  ${tw`
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
h-52
`}

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  resize: none;
`;

type Props = ControllersProps & {
  name: string;

  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  validateFields?: string | string[];
  placeholder?: string;
  hiddeContent?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const TextArea = ({
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
    <StyledTextArea
      {...field}
      {...props}
      autoComplete="off"
      placeholder={placeholder}
      value={hiddeContent ? '' : field.value}
      onChange={handleOnChange}
    />
  );
};

export default TextArea;

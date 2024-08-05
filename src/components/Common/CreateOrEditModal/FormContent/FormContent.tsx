import tw, { styled } from 'twin.macro';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { useFormContext, useWatch } from 'react-hook-form';

import Input from '../../Input';
import Avatar from '../../Avatar';
import TextArea from '../../TextArea';

const StyledInputContainer = tw.div`
flex
flex-col
gap-2
mt-4
`;

const StyledInputLabel = tw.span`
text-sm
font-bold
text-darks-black
`;

const StyledInnerContainer = tw.div`
flex
items-center
gap-4
`;

const StyledAddAvatarButton = styled.div`
  ${tw`
flex
gap-2
items-center
rounded
`}

  > label {
    display: flex;
    width: 100%;
    gap: 10px;
    )cursor: pointer;
    > input {
      background-color: green;
    }
  }
`;

const StyledFormWrapper = tw.section`
flex
flex-col
`;

type Props = {
  formBaseName: string;
};

const FormContent = ({ formBaseName }: Props) => {
  const formValues = useWatch({ name: formBaseName });
  const { setValue } = useFormContext();

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as never;

      setValue(`${formBaseName}.avatar`, result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <StyledInputContainer>
        <StyledInputLabel>Name *</StyledInputLabel>
        <Input name={`${formBaseName}.name`} placeholder="name" type="text" />
      </StyledInputContainer>
      <StyledFormWrapper />
      <StyledInputContainer>
        <StyledInputLabel>Website *</StyledInputLabel>
        <Input name={`${formBaseName}.website`} placeholder="Website" type="text" />
      </StyledInputContainer>
      <StyledFormWrapper />
      <StyledInputContainer>
        <StyledInputLabel>Avatar</StyledInputLabel>
        <StyledInnerContainer>
          <Avatar name={formValues.name} src={formValues.avatar} />

          <StyledAddAvatarButton>
            <label htmlFor={formValues.id}>
              <PhotoIcon className="h-6 w-6 text-darks-black" />
              Upload Photo
              <input
                hidden
                accept="image/*"
                id={formValues.id}
                type="file"
                onChange={onImageChange}
              />
            </label>
          </StyledAddAvatarButton>
        </StyledInnerContainer>
      </StyledInputContainer>
      <StyledFormWrapper />
      <StyledInputContainer>
        <StyledInputLabel>Description *</StyledInputLabel>
        <TextArea name={`${formBaseName}.description`} placeholder="Description" />
      </StyledInputContainer>
    </>
  );
};

export default FormContent;

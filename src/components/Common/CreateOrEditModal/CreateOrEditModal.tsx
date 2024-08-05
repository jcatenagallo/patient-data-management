import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion, useWillChange } from 'framer-motion';
import tw, { styled } from 'twin.macro';
import { useId, useMemo, useRef } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';

import useNiceModal from '@/hooks/useNiceModal';
import useHandleClickOutside from '@/hooks/useHandleClickOutside';
import { PatientRecord } from '@/types/common';
import {
  CreateOrEditPatientSchema,
  createOrEditPatientSchema,
} from '@/validationsSchemas/createOrEditPatientSchema';
import { FORM_BASE_NAMES } from '@/types/enums';
import { DefaultAvatar } from '@/assets/images';
import { GET_PATIENTS_RECORDS } from '@/hooks/api/useGetPatientsRecord';

import Input from '../Input';
import Avatar from '../Avatar';
import TextArea from '../TextArea';

const StyledLayer = tw(motion.div)`
absolute
top-0
left-0
bottom-0
right-0
bg-[rgba(136,136,136,0.4)]
backdrop-blur-[8px]
z-20
`;

const StyledWrapper = tw.div`
absolute
top-0
left-0
bottom-0
right-0
bg-white
flex
flex-col 
p-6
bg-white

tablet:w-full
tablet:max-w-lg
tablet:rounded-2xl
tablet:bottom-auto
tablet:right-auto
tablet:top-1/2
tablet:left-1/2
tablet:-translate-x-1/2
tablet:-translate-y-1/2
`;

const StyledHeader = tw.header`
flex
items-center
justify-between
`;

const StyledTitle = tw.h2`
text-xl
font-light
text-darks-black
`;

const StyledFormWrapper = tw.section`
flex
flex-col
`;

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

    cursor: pointer;
    > input {
      background-color: green;
    }
  }
`;

const StyledAddPatientButton = tw.button`
flex
items-center
px-4
py-2
rounded-full
bg-greens-sage
text-darks-black
mt-4
w-fit
self-end
hover:bg-greens-viridian
`;

type Props = {
  patientData?: PatientRecord;
};

const CreateOrEditModal = NiceModal.create(({ patientData }: Props) => {
  const modal = useModal();
  const { isOpen, handleOnClose } = useNiceModal(modal);
  const willChange = useWillChange();
  const ref = useRef(null);
  const id = useId();
  const isEditMode = !!patientData;
  const formBaseName = FORM_BASE_NAMES.CREATE_OR_EDIT_PATIENT;
  const defuatlValues: CreateOrEditPatientSchema = {
    [formBaseName]: {
      name: patientData?.name || '',
      website: patientData?.website || '',
      avatar: patientData?.avatar || DefaultAvatar,
      description: patientData?.description || '',
      createdAt: patientData?.createdAt || new Date().toISOString(),
      id: patientData?.id || id,
    },
  };

  const form = useForm<CreateOrEditPatientSchema>({
    resolver: yupResolver(createOrEditPatientSchema),
    defaultValues: defuatlValues,
  });

  const formValues = useWatch({
    name: formBaseName,
    control: form.control,
  });

  const titleLabel = useMemo(
    () => (isEditMode ? 'Edit Patient' : 'Create New Patient'),
    [isEditMode],
  );

  const buttonLabel = useMemo(() => (isEditMode ? 'Edit' : 'Create'), [isEditMode]);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as never;

      form.setValue(`${formBaseName}.avatar`, result);
    };
    reader.readAsDataURL(file);
  };

  useHandleClickOutside({
    ref,
    cb: handleOnClose,
  });

  const queryClient = useQueryClient();

  const handleOptimisticUpdate = (newPatient: PatientRecord) => {
    const queriesCache = queryClient.getQueryCache().findAll([GET_PATIENTS_RECORDS])[0];
    const queriesCacheData = queriesCache?.state.data as PatientRecord[];

    let newPatientsData;

    if (isEditMode) {
      newPatientsData = queriesCacheData?.map((item) =>
        item.id === newPatient.id ? newPatient : item,
      );
    } else {
      newPatientsData = queriesCacheData ? [newPatient, ...queriesCacheData] : [newPatient];
    }

    queryClient.setQueryData(queriesCache.queryKey, newPatientsData);
    handleOnClose();
  };

  const handleCreatePatient = () => {
    form.trigger().then((isValid) => {
      if (isValid) {
        handleOptimisticUpdate(formValues);
      }
    });
  };

  return (
    <FormProvider {...form}>
      <AnimatePresence initial={true} mode="popLayout">
        {isOpen && (
          <StyledLayer
            key="isOpen"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            style={{ willChange }}
            transition={{ type: 'spring', duration: 0.8 }}>
            <StyledWrapper ref={ref}>
              <StyledHeader>
                <StyledTitle>{titleLabel}</StyledTitle>
                <button onClick={handleOnClose}>
                  <XMarkIcon className="h-6 w-6 text-darks-black" />
                </button>
              </StyledHeader>
              <StyledInputContainer>
                <StyledInputLabel>Name *</StyledInputLabel>
                <Input name={`${formBaseName}.name`} placeholder="name" type="text" />
              </StyledInputContainer>
              <StyledFormWrapper />
              <StyledInputContainer>
                <StyledInputLabel>Website *</StyledInputLabel>
                <Input name={`${formBaseName}.website`} placeholder="name" type="text" />
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
              <StyledAddPatientButton onClick={handleCreatePatient}>
                {buttonLabel}
              </StyledAddPatientButton>
              <StyledFormWrapper />
            </StyledWrapper>
          </StyledLayer>
        )}
      </AnimatePresence>
    </FormProvider>
  );
});

export default CreateOrEditModal;

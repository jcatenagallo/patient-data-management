import { useQueryClient } from '@tanstack/react-query';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useMemo } from 'react';
import tw from 'twin.macro';
import toast from 'react-hot-toast';
import { useFormContext, useWatch } from 'react-hook-form';

import { PatientRecord } from '@/types/common';
import { GET_PATIENTS_RECORDS } from '@/hooks/api/useGetPatientsRecord';

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
  isEditMode: boolean;
  onCloseModal: () => void;
  formBaseName: string;
};

const CreateOrdEditButton = ({ isEditMode, onCloseModal, formBaseName }: Props) => {
  const buttonLabel = useMemo(() => (isEditMode ? 'Edit' : 'Create'), [isEditMode]);
  const queryClient = useQueryClient();
  const { trigger } = useFormContext();
  const formValues = useWatch({ name: formBaseName });

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
    onCloseModal();
    toast.success(`Patient ${isEditMode ? 'edited' : 'created'} successfully`, {
      style: {
        backgroundColor: 'rgba(42, 51, 60, 0.80)',
        color: '#fff',
      },

      icon: <CheckCircleIcon className="h-6 w-6 text-white" />,
    });
  };

  const handleCreatePatient = () => {
    trigger().then((isValid) => {
      if (isValid) {
        handleOptimisticUpdate(formValues);
      }
    });
  };

  return (
    <StyledAddPatientButton onClick={handleCreatePatient}>{buttonLabel}</StyledAddPatientButton>
  );
};

export default CreateOrdEditButton;

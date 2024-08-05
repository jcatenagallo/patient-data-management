import tw from 'twin.macro';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import { useId } from 'react';
import NiceModal from '@ebay/nice-modal-react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import Layout from '@/components/Layout';
import useGetPatientsRecords from '@/hooks/api/useGetPatientsRecord';
import Card from '@/components/Common/Card';
import CreateOrEditModal from '@/components/Common/CreateOrEditModal';

const StyledSkeleton = tw(Skeleton)`
h-[209px]
rounded-2xl
`;

const StyledWrapper = tw.div`
relative
p-4
gap-4
grid
tablet:mx-auto
grid-cols-1
tablet:grid-cols-2
desktop:grid-cols-3
`;

const StyledAddPatientButton = tw.button`
fixed
bottom-4
right-6
flex
gap-2
items-center
p-4
rounded-full
bg-greens-sage
text-darks-black
w-fit
hover:bg-greens-viridian
`;

export default function Home() {
  const { data, isLoading } = useGetPatientsRecords();
  const id = useId();
  const createOrEditModalId = `create-or-edit-modal-${id}`;

  return (
    <Layout>
      <StyledWrapper>
        {isLoading
          ? Array.from({ length: 100 }, (_, index) => index).map((item) => (
              <StyledSkeleton key={item} />
            ))
          : data?.map((item) => (
              <Card key={item.id} createOrEditModalId={createOrEditModalId} patientData={item} />
            ))}
      </StyledWrapper>
      <StyledAddPatientButton
        onClick={() => {
          NiceModal.show(createOrEditModalId);
          document.body.style.overflow = 'hidden';
        }}>
        <UserPlusIcon className="h-6 w-6 text-darks-black" />
        Add New Patient
      </StyledAddPatientButton>
      <CreateOrEditModal id={createOrEditModalId} />
    </Layout>
  );
}

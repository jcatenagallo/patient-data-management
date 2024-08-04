import { MutableRefObject, useEffect } from 'react';

type Props = {
  ref: MutableRefObject<null>;
  cb: () => void;
};

const useHandleClickOutside = ({ ref, cb }: Props) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !(ref.current as HTMLElement).contains(event.target as Node)) {
        cb();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cb, ref]);
};

export default useHandleClickOutside;

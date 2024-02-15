'use client';
import { MdClose } from 'react-icons/md';
import './navbar.scss';

const CloseBtn = ({ handleOpen }: { handleOpen: () => void }) => {
  return (
    <div
      className='navbar__close-btn'
      onClick={handleOpen}
    >
      <MdClose />
    </div>
  );
};

export default CloseBtn;

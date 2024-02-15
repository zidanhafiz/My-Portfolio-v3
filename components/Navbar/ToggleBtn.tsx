'use client';
import { HiMenuAlt2 } from 'react-icons/hi';
import './navbar.scss';

const ToggleBtn = ({ handleOpen }: { handleOpen: () => void }) => {
  return (
    <div
      className='navbar__toggle-btn'
      onClick={handleOpen}
    >
      <HiMenuAlt2 />
    </div>
  );
};

export default ToggleBtn;

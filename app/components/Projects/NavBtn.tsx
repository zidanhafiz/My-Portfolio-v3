import { Dispatch, SetStateAction } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import './navBtn.scss';

type NavBtnProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
};

const NavBtn = ({ currentPage, setCurrentPage, totalPage }: NavBtnProps) => {
  const arrTotalPage = Array.from({ length: totalPage }, (_, i) => i + 1);

  const prevBtnHandle = () => {
    if (currentPage === 1) {
      return setCurrentPage(totalPage);
    }
    return setCurrentPage(currentPage - 1);
  };

  const nextBtnHandle = () => {
    if (currentPage === totalPage) {
      return setCurrentPage(1);
    }
    return setCurrentPage(currentPage + 1);
  };

  return (
    <div className='carousel__container-nav'>
      <button onClick={prevBtnHandle}>
        <IoMdArrowDropleft />
      </button>
      <div className='nav__dots'>
        {arrTotalPage.map((page) => (
          <span
            key={page}
            className={`${page === currentPage && 'active'}`}
            onClick={() => setCurrentPage(page)}
          ></span>
        ))}
      </div>
      <button onClick={nextBtnHandle}>
        <IoMdArrowDropright />
      </button>
    </div>
  );
};

export default NavBtn;

import React from 'react';

function Footer() {
  return (
    // absolute 일때 x 가운데 정렬 하는 법. left: 50%, translate-x: -50%
    // 화면 기준으로 아이템의 첫 시작이 50%만큼인 것이고, 아이템 크기의 50%만큼 왼쪽으로 이동한 것.
    <footer className='absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-600'>
      <p>Copyright &copy; {new Date().getFullYear()} Roh Haechang</p>
    </footer>
  );
}

export default Footer;
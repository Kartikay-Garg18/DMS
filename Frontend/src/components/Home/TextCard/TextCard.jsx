import { CCard, CCardBody, CCardText,CCardImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const TextCard = ({ imgSrc, description }) => {
    return (
      <CCard className="w-full border-blue-gray-400">
        <CCardImage variant="top" src={imgSrc} className="w-[3rem] h-[3rem] mx-auto mt-4 object-contain"  />
        <CCardBody>
          <CCardText className='text-center'>{description}</CCardText>
        </CCardBody>
      </CCard>
    );
  };

  export default TextCard;

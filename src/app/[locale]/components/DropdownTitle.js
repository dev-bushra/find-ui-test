import Image from 'next/image';
import { useTranslations } from "next-intl";

const DropdownTitle = ({ iconSrc, text }) => {
    const t = useTranslations("Header");

  return (
    <div className="flex flex-row align-items-center">
      <Image src={iconSrc} width={24} height={24} alt="icon" />
      <span className="ms-2">{text}</span>
    </div>
  );
};

export default DropdownTitle;
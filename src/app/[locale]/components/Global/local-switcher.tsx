"use 'client' : '' ";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import LangIcon from "../../../../../public/icons/language-icon.svg";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = () => {
    var nextLocale = localActive
    if(nextLocale === 'en') {
      nextLocale = 'ar'
    } else if(nextLocale === 'ar') {
      nextLocale = 'en'
    }
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="language-changer-toggler flex items-center justify-center mx-auto gap-x-2 cursor-pointer" onClick={()=>{onSelectChange()}}>
      <Image
        className=""
        width={24}
        height={24}
        src={LangIcon}
        alt="Language changer"
      />
      <span className="text-white text-[14px] font-normal">{ localActive === 'en' ? 'العربية' : 'English' }</span>
    </div>
  );
}

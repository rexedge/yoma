import Image from "next/image";

export default function Body() {
    return (
        <div className="max-w-[480px]">
            <div className="w-full aspect-[1.3]">
                <Image src="/secure.png" width={480} height={368} alt='' />
            </div>
            <div className=" bg-white w-[284px] h-[120px] relative bottom-16 ">
                <div className="flex gap-3 pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21.091 6.97953C20.241 6.03953 18.821 5.56953 16.761 5.56953H16.521V5.52953C16.521 3.84953 16.521 1.76953 12.761 1.76953H11.241C7.48101 1.76953 7.48101 3.85953 7.48101 5.52953V5.57953H7.24101C5.17101 5.57953 3.76101 6.04953 2.91101 6.98953C1.92101 8.08953 1.95101 9.56953 2.05101 10.5795L2.06101 10.6495L2.13847 11.4628C2.15273 11.6126 2.2334 11.7479 2.35929 11.8303C2.59909 11.9872 3.00044 12.2459 3.24101 12.3795C3.38101 12.4695 3.53101 12.5495 3.68101 12.6295C5.39101 13.5695 7.27101 14.1995 9.18101 14.5095C9.27101 15.4495 9.68101 16.5495 11.871 16.5495C14.061 16.5495 14.491 15.4595 14.561 14.4895C16.601 14.1595 18.571 13.4495 20.351 12.4095C20.411 12.3795 20.451 12.3495 20.501 12.3195C20.8977 12.0953 21.3093 11.819 21.6845 11.5484C21.7975 11.4668 21.8698 11.3408 21.8852 11.2023L21.901 11.0595L21.951 10.5895C21.961 10.5295 21.961 10.4795 21.971 10.4095C22.051 9.39953 22.031 8.01953 21.091 6.97953ZM13.091 13.8295C13.091 14.8895 13.091 15.0495 11.861 15.0495C10.631 15.0495 10.631 14.8595 10.631 13.8395V12.5795H13.091V13.8295ZM8.91101 5.56953V5.52953C8.91101 3.82953 8.91101 3.19953 11.241 3.19953H12.761C15.091 3.19953 15.091 3.83953 15.091 5.52953V5.57953H8.91101V5.56953Z" fill="#45214A" />
                        <path d="M20.8733 13.7339C21.2269 13.5656 21.6342 13.8459 21.5988 14.2359L21.2398 18.1897C21.0298 20.1897 20.2098 22.2297 15.8098 22.2297H8.18984C3.78984 22.2297 2.96984 20.1897 2.75984 18.1997L2.41913 14.4519C2.38409 14.0664 2.78205 13.7865 3.13468 13.946C4.2741 14.4615 6.37724 15.3761 7.67641 15.7164C7.84072 15.7594 7.97361 15.877 8.04556 16.0309C8.65253 17.329 9.96896 18.0197 11.8698 18.0197C13.752 18.0197 15.085 17.3024 15.694 16.0011C15.766 15.8471 15.8991 15.7296 16.0635 15.6863C17.443 15.3233 19.6816 14.301 20.8733 13.7339Z" fill="#45214A" />
                    </svg>
                    <div className=" text-purple-900 text-sm">Dementia Care</div>
                </div>
                <div className="flex gap-3 pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_1525_2741)">
                            <path d="M20.6172 8.45C19.5672 3.83 15.5372 1.75 11.9972 1.75C11.9972 1.75 11.9972 1.75 11.9872 1.75C8.45717 1.75 4.41717 3.82 3.36717 8.44C2.19717 13.6 5.35717 17.97 8.21717 20.72C9.27717 21.74 10.6372 22.25 11.9972 22.25C13.3572 22.25 14.7172 21.74 15.7672 20.72C18.6272 17.97 21.7872 13.61 20.6172 8.45ZM11.9972 13.46C10.2572 13.46 8.84717 12.05 8.84717 10.31C8.84717 8.57 10.2572 7.16 11.9972 7.16C13.7372 7.16 15.1472 8.57 15.1472 10.31C15.1472 12.05 13.7372 13.46 11.9972 13.46Z" fill="#45214A" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1525_2741">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="text-sm"> Lagos State Nigeria</div>
                </div>
                <div className="flex gap-3 pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.7289 3.50965L15.4889 7.02965C15.7289 7.51965 16.3689 7.98965 16.9089 8.07965L20.0989 8.60965C22.1389 8.94965 22.6189 10.4296 21.1489 11.8896L18.6689 14.3696C18.2489 14.7896 18.0189 15.5996 18.1489 16.1796L18.8589 19.2496C19.4189 21.6796 18.1289 22.6196 15.9789 21.3496L12.9889 19.5796C12.4489 19.2596 11.5589 19.2596 11.0089 19.5796L8.01893 21.3496C5.87893 22.6196 4.57893 21.6696 5.13893 19.2496L5.84893 16.1796C5.97893 15.5996 5.74893 14.7896 5.32893 14.3696L2.84893 11.8896C1.38893 10.4296 1.85893 8.94965 3.89893 8.60965L7.08893 8.07965C7.61893 7.98965 8.25893 7.51965 8.49893 7.02965L10.2589 3.50965C11.2189 1.59965 12.7789 1.59965 13.7289 3.50965Z" fill="#45214A" />
                    </svg>
                    <div className="text-sm"> 39 Recomendations</div>
                </div>
            </div>
            <div className=" relative bottom-24">
                <div className=" bg-purple-950 py-1 px-5 w-52 rounded-xl text-white text-sm" > Contact Jane Doe </div>
            </div>
        </div>
    )
}
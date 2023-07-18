'use client';
import { useState } from 'react';

const DropdownItem = ({text}) => {
    const [checked, setChecked] = useState(false)
    const handleClick = () => {
        console.log('Clicked .....')
        setChecked(!checked)
    }
    return (
        <div className='flex gap-3' onClick={handleClick}>
            {
                checked ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#FEFEFE"/>
                    <path d="M10.5814 15.58C10.3814 15.58 10.1914 15.5 10.0514 15.36L7.22141 12.53C6.93141 12.24 6.93141 11.76 7.22141 11.47C7.51141 11.18 7.99141 11.18 8.28141 11.47L10.5814 13.77L15.7214 8.62998C16.0114 8.33998 16.4914 8.33998 16.7814 8.62998C17.0714 8.91998 17.0714 9.39998 16.7814 9.68998L11.1114 15.36C10.9714 15.5 10.7814 15.58 10.5814 15.58Z" fill="#FEFEFE"/>
                </svg>
              ):(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#FEFEFE"/>
                </svg>
            )
            }
            
            
            {/* <input type="checkbox" className='accent-[#45214A]' readOnly checked={checked} /> */}
            <button className='text-white'>{text}</button>
        </div>
    )
}

const Dropdown = ({title, dropdownList}) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div>
            <button
                onClick={handleOpen}
                className=" flex justify-between px-4 py-2 w-full text-white"
            >
                {title}
                <svg className={`${open && 'rotate-180'} transition-all duration-500`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.08123 8.17969H12.3112H17.9212C18.8812 8.17969 19.3612 9.33969 18.6812 10.0197L13.5012 15.1997C12.6712 16.0297 11.3212 16.0297 10.4912 15.1997L8.52123 13.2297L5.31123 10.0197C4.64123 9.33969 5.12123 8.17969 6.08123 8.17969Z" fill="#FEFEFE" />
                </svg>
            </button>
            {open && (
                <div className="w-full px-4 text-left justify-start">
                    {
                        dropdownList.map((item, i) => (
                            <DropdownItem text={item} key={i} />
                        ))
                    }
                </div>
            )}
        </div>
    );
}

const SearchInputBtn = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // const HandleClick = () => {
    //     setIsOpen(!isOpen);
    // };

    const sexList= ['Male', 'Female', 'Both']
    const coreRequirements= ['Dementia Care', 'Respite Care', 'Hospital Discharge', 'Elderly Care']
    const CoreNeeds= ['Hourly Care', 'Overnight Care', 'Live-in Care']

    return (
        <div className="flex justify-center mt-[100px]">
            <button
                onClick={toggleDropdown}
                className=" flex bg-[#45214A] w-[126px] h-[56px] p-4 text-white rounded-lg mr-3"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.39844 2.1001H18.5984C19.6984 2.1001 20.5984 3.0001 20.5984 4.1001V6.3001C20.5984 7.1001 20.0984 8.1001 19.5984 8.6001L15.2984 12.4001C14.6984 12.9001 14.2984 13.9001 14.2984 14.7001V19.0001C14.2984 19.6001 13.8984 20.4001 13.3984 20.7001L11.9984 21.6001C10.6984 22.4001 8.89844 21.5001 8.89844 19.9001V14.6001C8.89844 13.9001 8.49844 13.0001 8.09844 12.5001L4.29844 8.5001C3.79844 8.0001 3.39844 7.1001 3.39844 6.5001V4.2001C3.39844 3.0001 4.29844 2.1001 5.39844 2.1001Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.93 2.09998L6 9.99998" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Filter
            </button>
            {isOpen && (
                <div className=" bg-[#45214A] flex absolute flex-col justify-between left-40 mt-14 rounded w-72">
                    <Dropdown title='Sex of Core Giver' dropdownList={sexList} />
                    <Dropdown title='Core Requirements' dropdownList={coreRequirements} />
                    <Dropdown title='Core Needs' dropdownList={CoreNeeds} />
                </div>

            )}

            <input className="w-[788px] h-[56px] bg-[#f2f2f2] outline-none rounded-lg justify-between px-24" type="text" placeholder="Enter you location" />
            <div className=" absolute flex mr-[47%] mt-4">
          

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="#292D32" />
                    <path d="M21.2986 21.9996C21.1186 21.9996 20.9386 21.9296 20.8086 21.7996L18.9486 19.9396C18.6786 19.6696 18.6786 19.2296 18.9486 18.9496C19.2186 18.6796 19.6586 18.6796 19.9386 18.9496L21.7986 20.8096C22.0686 21.0796 22.0686 21.5196 21.7986 21.7996C21.6586 21.9296 21.4786 21.9996 21.2986 21.9996Z" fill="#292D32" />
                </svg>
            </div>
            <button className=" flex bg-[#45214A] w-[126px] h-[56px] p-4 pr-5 text-white rounded-lg">Search</button>
        </div>
    );
};

export default SearchInputBtn;
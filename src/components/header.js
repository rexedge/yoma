import Link from "next/link";

export default function Header(){
    return(
        <>
        <nav className=" flex justify-between m-7 items-center py-4 px-4">
            <div className="flex gap-7 "> 
            <Link href="/">
                <div>Home</div>
            </Link>
                <Link href="/Find-a-carer">
                    <div>Fin a carer</div>
                </Link>
                <Link href="/become-a-carer">
                    <div> Become a carer</div>
                </Link>
            </div>
            <div>
                <img src="/argue.png"/>
            </div>
            <div className="flex gap-5 items-center">
                <Link href="/Sign-in">
                    <div>Sign In</div>
                </Link>
                <Link href="/Sign-up">
                    <div className=" border border-solid-red bg-purple-950 rounded-2xl text-white px-8 py-4 ">Sign-up</div>
                </Link>
            </div>
    
        </nav>
        </>
    )
}
import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import { auth, signOut, signIn } from "@/auth";


const UserMenu = async () => {
  const session = await auth();
  return (
    <Popover>
      <PopoverTrigger>
        <HiOutlineUserCircle className='text-[23px] mb-1'/>
      </PopoverTrigger>
      <PopoverContent className='w-[100px]'>
      {session && session?.user ? (
        <>
        
      <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>
              </> 
      ) : (

              <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
      )}
      </PopoverContent>
    </Popover>
  )
}

export default UserMenu
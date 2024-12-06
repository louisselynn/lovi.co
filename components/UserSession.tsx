"use server";

import { auth, signIn, signOut } from '@/auth';
import React from 'react';
import UserIcon from './UserMenu';


const UserSession = async () => {

  const session = await auth();
  const user = session?.user;

  const logout = async () => {
    "use server";
    await signOut({ redirectTo: "/"})
  }

  const login = async () => {
    "use server";
    await signIn('google')
  }

  return (
    <>
      <UserIcon logout={logout} login={login} user={user}/>
    </>
  )
}

export default UserSession;
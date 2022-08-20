import { FC } from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';
import { Loader } from './Loader';

export const Navbar: FC = () => {
  const { status, data: session } = useSession();
  return (
    <div className="navbar bg-base-200 rounded-b-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">AuctionHouse</a>
      </div>
      <div className="flex-none">
        {status === 'loading' ? (
          <Loader />
        ) : status === 'authenticated' ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {session && session?.user && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={session.user.image!} alt={session.user.name!} />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn btn-ghost" onClick={() => signIn('google')}>
            Signin
          </button>
        )}
      </div>
    </div>
  );
};

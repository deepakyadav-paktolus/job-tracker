import { ModeToggle } from '../Organisms/ModeToggle';
import ProfileAvatar from './avatar';
import Logout from './logout';
import Link from 'next/link';

const Nav = () => {

  return (
    <>
      <Link href={"/dashboard/profile"}
        className="cursor-pointer"
      >
        Profile
      </Link>

      <Link href={"/dashboard/settings"}
        className="cursor-pointer"
      >
        Settings
      </Link>
      <Link href={'/dashboard/help'}
        className="cursor-pointer"
      >
        Help
      </Link>
      <Link href={"/dashboard/about"}
        className="cursor-pointer"
      >
        About
      </Link>
      <Logout />
      <ProfileAvatar />
      <ModeToggle />
    </>
  )
}

export default Nav
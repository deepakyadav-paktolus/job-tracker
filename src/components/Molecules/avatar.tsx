import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProfileAvatar = () => {
  return (
    <Avatar>
  <AvatarImage src="/defaultProfile.webp" alt="@shadcn" />
  <AvatarFallback>A</AvatarFallback>
</Avatar>
  )
}

export default ProfileAvatar
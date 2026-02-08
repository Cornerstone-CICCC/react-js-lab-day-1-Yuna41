import type { User } from "../types/user.types"

type Props = {
  user: User | null
}

const UserProfile = ({ user }: Props) => {
  if(!user) return <p>No user selected.</p>

  return (
    <div>
      <h2>User Profile</h2>
      <dl>
        <dt>fullname:</dt>
        <dd>{user.fullname}</dd>
        <dt>age:</dt>
        <dd>{user.age}</dd>
        <dt>education:</dt>
        <dd>{user.education}</dd>
        <dt>gender:</dt>
        <dd>{user.gender}</dd>
        <dt>skills:</dt>
        <dd>{user.skills.join(', ')}</dd>
        <dt>bio:</dt>
        <dd>{user.bio}</dd>
      </dl>
    </div>
  )
}

export default UserProfile
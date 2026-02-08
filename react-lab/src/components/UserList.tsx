import type { User } from "../types/user.types"

type Props = {
  users: User[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  onView: (id: string) => void
}

const UserList = ({ users, onEdit, onDelete, onView }: Props) => {

  return (
    <div>
      <h2>User List</h2>
      <table style={{border: '1px solid'}}>
        <thead>
          <tr>
            <th>id</th>
            <th>fullname</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>
                <button onClick={() => onView(user.id)}>View</button>
                <button onClick={() => onEdit(user.id)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
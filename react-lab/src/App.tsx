import { useState } from 'react'
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import type { User } from './types/user.types';
import { v4 as uuidv4 } from 'uuid'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    fullname: '',
    age: 0,
    education: '',
    gender: '',
    skills: [],
    bio: '',
  })
  const [viewUser, setViewUser] = useState<User | null>(null)
  const [editUser, setEditUser] = useState<User | null>(null)

  const handleAddUser = (usr: Omit<User, 'id'>) => {
    setUsers(prevState =>
      [...prevState, {
        ...usr,
        id: uuidv4()
      }]
    )
    setFormData({
      fullname: '',
      age: 0,
      education: '',
      gender: '',
      skills: [],
      bio: '',
    })
    toast.success('User added successfully!')
  }

  const handleDeleteUser = (id: string) => {
    setUsers(prevState =>
      prevState.filter(usr => usr.id !== id)
    )
    setFormData({
      fullname: '',
      age: 0,
      education: '',
      gender: '',
      skills: [],
      bio: '',
    })
    toast.success('Removed user!')
  }

  const handleUpdateUser = (data: Omit<User, 'id'>) => {
    if(!editUser) return

    setUsers(prevState =>
      prevState.map(usr =>
        usr.id === editUser.id
        ? { id: editUser.id, ...data }
        : usr
      )
    )
    setEditUser(null)
    setFormData({
      fullname: '',
      age: 0,
      education: '',
      gender: '',
      skills: [],
      bio: '',
    })
    toast.success('User updated!')
  }

  const handleEditUserId = (id: string) => {
    const found = users.find(usr => usr.id === id)
    if(found){
      setEditUser(found)
    } else {
      setEditUser(null)
    }
  }

  const handleViewUser = (id: string) => {
    const found = users.find(usr => usr.id === id)
    if(found){
      setViewUser(found)
    }
  }

  return (
    <>
      <div style={{display: 'flex', gap: '2rem'}}>
        <UserForm
          formData={formData}
          setFormData={setFormData}
          onAdd={handleAddUser}
          editUser={editUser}
          onUpdate={handleUpdateUser}
        />
        <div>
          <UserList
            users={users}
            onDelete={handleDeleteUser}
            onEdit={handleEditUserId}
            onView={handleViewUser}
          />
          <UserProfile
            user={viewUser}
          />
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default App
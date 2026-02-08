import { useEffect, type ChangeEvent, type Dispatch, type FormEvent, type SetStateAction } from 'react'
import type { User } from '../types/user.types'

type Props = {
  formData: Omit<User, 'id'>
  setFormData: Dispatch<SetStateAction<Omit<User, 'id'>>>
  onAdd: (usr: Omit<User, 'id'>) => void
  editUser: User | null
  onUpdate: (usr: Omit<User, 'id'>) => void
}

const UserForm = ({ formData, setFormData, onAdd, editUser, onUpdate }: Props) => {

  useEffect(() => {
    if(editUser) {
      setFormData({
        fullname: editUser.fullname,
        age: editUser.age,
        education: editUser.education,
        gender: editUser.gender,
        skills: editUser.skills,
        bio: editUser.bio
      })
    }
  }, [editUser])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target
    if(type === 'checkbox'){
      const checked = (e.target as HTMLInputElement).checked

      setFormData(prev => {
        if(checked){
          return {
            ...prev,
            skills: [...prev.skills, value]
          }
        } else {
          return {
            ...prev,
            skills: prev.skills.filter(skill => skill !== value)
          }
        }
      })
    } else if(type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: Number(value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(editUser){
      onUpdate(formData)
    } else {
      onAdd(formData)
    }
    setFormData({
      fullname: '',
      age: 0,
      education: '',
      gender: '',
      skills: [],
      bio: ''
    })
  }

  return (
    <section>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fullname</label>
          <input type="text" name='fullname' value={formData.fullname} onChange={handleChange} placeholder='Fullname' />
        </div>
        <div>
          <label>Age</label>
          <input type="number" name='age' value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Education</label>
          <select name="education" value={formData.education} onChange={handleChange}>
            <option value="">Select Education</option>
            <option value="GradeSchool">Grade school</option>
            <option value="HighSchool">High school</option>
            <option value="College">College</option>
          </select>
        </div>
        <div>
          <p>Gender</p>
          <label>
            <input type="radio" name='gender' value='Male' checked={formData.gender === 'Male'} onChange={handleChange} />
            <span>Male</span>
          </label>
          <label>
            <input type="radio" name='gender' value='Female' checked={formData.gender === 'Female'} onChange={handleChange} />
            <span>Female</span>
          </label>
          <label>
            <input type="radio" name='gender' value='Other' checked={formData.gender === 'Other'} onChange={handleChange} />
            <span>Other</span>
          </label>
        </div>
        <div>
          <p>Skills</p>
          <label>
            <input type="checkbox" name='skills' value="TypeScript" checked={formData.skills.includes('TypeScript')} onChange={handleChange} />
            <span>TypeScript</span>
          </label>
          <label>
            <input type="checkbox" name='skills' value="React" checked={formData.skills.includes('React')} onChange={handleChange} />
            <span>React</span>
          </label>
          <label>
            <input type="checkbox" name='skills' value="Node" checked={formData.skills.includes('Node')} onChange={handleChange} />
            <span>Node</span>
          </label>
          <label>
            <input type="checkbox" name='skills' value="NoSQL" checked={formData.skills.includes('NoSQL')} onChange={handleChange} />
            <span>NoSQL</span>
          </label>
        </div>
        <div>
          <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder='Bio' />
        </div>
        <div>
          <button type='submit'>{editUser ? 'Save User' : 'Add User'}</button>
          <button
            type='button'
            onClick={() => setFormData({
              fullname: '',
              age: 0,
              education: '',
              gender: '',
              skills: [],
              bio: ''
            })}
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  )
}

export default UserForm
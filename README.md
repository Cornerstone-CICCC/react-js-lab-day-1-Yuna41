[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/x0DRYeHH)
# React.js - Lab Day

**Goal:** Build a small CRUD app using React props, states, and forms.

## 📋 Instructions

1. Create a new React project by running `npm create vite@latest react-lab`. This will create a new directory. Run `cd react-lab` to go into the directory and then run `npm install` to install the dependencies.
2. Run `npm run dev` to start your React app.
3. Create three components inside the `src/components` directory:

    - `UserForm.tsx`
    - `UserList.tsx`
    - `UserProfile.tsx`

4. Here are the details for each component:

    **UserForm**
    - One controlled form with 6 fields and 2 buttons:
        - `fullname` (text)
        - `age` (number)
        - `education` (select) - *Grade school, high school, college*
        - `gender` (radio) - *Male, Female, other*
        - `skills` (checkbox) - *TypeScript, React, Node, NoSQL*
        - `bio` (textarea)
        ---
        - `Add/Save User` (button) - Adds or updates a user.
        - `Clear` (button) - Resets the form.
    - The form will be used for both adding and editing a user.

    **UserList**
    - List down all the users in an html table.
    - Each row should only show the user's `fullname` and `id`.
    - At the end of each row are the **View**, **Edit**, and **Delete** buttons.

    **UserProfile**
    - Shows all the selected user's data when the **View** button is clicked on `UserList` component. For the skills array, you can just separate each element with a comma.

5. Import all the components into the `App.tsx`. Your `App` component should hold all the states and handler functions needed by all 3 components.

    ```tsx
    import UserForm from './components/UserForm';
    import UserList from './components/UserList';
    import UserProfile from './components/UserProfile';

    const App = () => {
      /* Your states here */

      /* Your handlers here */

      return (
        <>
          <UserForm />
          <UserList />
          <UserProfile />
        </>
      )
    }
    ```

6. Pass the data and handlers from the `App` component to the necessary components.
7. For the states, make sure you have a `formData` state which is an object that holds all the form field data and a `users` state which holds the list of users. Create other needed states.

    **Example:**

    ```tsx
    const [users, setUsers] = useState<User[]>([])
    const [formData, setFormData] = useState<Omit(User, 'id')>({
      fullname: "",
      age: 0,
      education: "",
      gender: "",
      skills: [],
      bio: ""
    })
    ```

8. For the button functionality:

    - `View` - Shows the user data on the `UserProfile` component.
    - `Edit` - Updates the `UserForm` component and fills in the fields with the selected user's data.
    - `Delete` - Deletes the user.

9. Commit and push your changes once you are done.

## 📖 References

- [https://github.com/elmerdotdev/ciccc-react-review-code-along/]

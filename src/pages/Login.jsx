import { Form, FormContainer, Img, Label } from "../styles/Login.styled"
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";



const Login = () => {
const {setUser} = useAuthContext()
const navigate = useNavigate()


const handleSubmit = (e) => {
  e.preventDefault ();
setUser(true);
navigate(-1);

}

  return (
<FormContainer>
<Img src="../img/login-img.png" alt=""  />


 <Form onSubmit={handleSubmit}>
  <div className="mb-6 ">
    <Label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your email
    </Label>
    <input
      type="email"
      id="email"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="name@flowbite.com"
      required=""
    />
  </div>
  <div className="mb-6">
    <Label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Your password
    </Label>
    <input
      type="password"
      id="password"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
    />
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input
        id="remember"
        type="checkbox"
        defaultValue=""
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        required=""
      />
    </div>
    <Label
      htmlFor="remember"
      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
    >
      Remember me
    </Label>
  </div>
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
  >
    Submit
  </button>
</Form> 




</FormContainer>

  )
}

export default Login
import SignupForm from "./SignupForm"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <article className='mb-6'>
        <h1 className=" text-6xl text-center font-bold">Create your account<br />with <span className="text-amber-600">flavour</span></h1>
        <p className='font-bold text-2xl text-center mt-4'>
         Signup today!
        </p>
      </article>
      <SignupForm />
      <hr className=" w-64 mb-4 bg-gray-800" />
      <div>
        Already have an account? <Link to="/login" className="text-amber-600 underline hover:text-black dark:hover:text-white">Login</Link>
      </div>
    </section>
  )
}

export default Signup
/**
 * Signup form Component
 * 
 * 
 * @route "/signup"
 */

import { useState, useEffect } from "react";

// Regular Expression(REGEX)
const USER_REGEX = /^[A-z]{3,20}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const SignupForm = () => {

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPasswd, setValidPasswd] = useState(false);
  const [passwdFocus, setPasswdFocus] = useState(false);


  // Test input value with the REGEX
  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  });

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  });

  useEffect(() => {
    setValidPasswd(PASSWD_REGEX.test(password));
  });

  return (
    <>
      <form className="w-max h-max flex flex-col justify-start items-start gap-6 p-8">
        
        {/* Input container */}
        <div className=" w-80 transition-all">

          {/* Floating label */}
          <span
            id="placeholder"
            className={
              nameFocus || (username && validName) // onfocus
                ? "absolute -mt-4 ml-6 text-lg bg-white text-zinc-950 px-2 transition-all"
                : !nameFocus && username && !validName // Invalid data
                ? "absolute -mt-4 ml-6 text-lg bg-white text-red-700 px-2 transition-all"
                : "absolute mt-4 ml-6 text-md bg-white text-gray-600 transition-all"
            }
          >
            Username
          </span>

          {/* username input */}
          <input
            className={
              nameFocus || (username && validName) // onfocus
                ? "w-full h-full p-4 border-2 rounded border-slate-900 outline-none bg-transparent"
                : !nameFocus && username && !validName // Invalid data
                ? "w-full h-full p-4 border-2 rounded border-red-700 outline-none bg-transparent"
                : "w-full h-full p-4 border-2 rounded border-slate-600 outline-none bg-transparent"
            }
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            aria-invalid={validName ? "false" : "true"}
            required
          />
        </div>

        {/* Input container */}
        <div className="w-80">

          {/* FLoating label */}
          <span
            id="placeholder"
            className={
              emailFocus || (email && validEmail)// onfocus
                ? "absolute -mt-4 ml-6 text-lg bg-white text-zinc-950 px-2 transition-all"
                : !emailFocus && email && !validEmail // Invalid data
                ? "absolute -mt-4 ml-6 text-lg bg-white text-red-700 px-2 transition-all"
                : "absolute mt-4 ml-6 text-md bg-white text-gray-600 transition-all"
            }
          >
            Email
          </span>

          {/* Email input */}
          <input
            className={
              emailFocus || (email && validEmail) // onfocus
                ? "w-full h-full p-4 border-2 rounded border-slate-900 outline-none bg-transparent"
                : !emailFocus && email && !validEmail // Invalid data
                ? "w-full h-full p-4 border-2 rounded border-red-700 outline-none bg-transparent"
                : "w-full h-full p-4 border-2 rounded border-slate-600 outline-none bg-transparent"
            }
            type="email"
            id="email"
            name="email"
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            aria-invalid={validEmail ? "false" : "true"}
            required
          />
        </div>

        {/* Input container */}
        <div className="w-80">

          {/* Floating label */}
          <span
            id="placeholder"
            className={
              passwdFocus || (password && validPasswd)// onfocus
                ? "absolute -mt-4 ml-6 text-lg bg-white text-zinc-950 px-2 transition-all"
                : !emailFocus && email && !validEmail // Invalid data
                ? "absolute -mt-4 ml-6 text-lg bg-white text-red-700 px-2 transition-all"
                : "absolute mt-4 ml-6 text-md bg-white text-gray-600 transition-all"
            }
          >
            Password
          </span>

          {/* Password input */}
          <input
            className={
              passwdFocus || (password && validPasswd)
                ? "w-full h-full p-4 border-2 rounded border-slate-900 outline-none bg-transparent"
                : !passwdFocus && password && !validPasswd // Invalid data
                ? "w-full h-full p-4 border-2 rounded border-red-700 outline-none bg-transparent"
                : "w-full h-full p-4 border-2 rounded border-slate-600 outline-none bg-transparent"
            }
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswdFocus(true)}
            onBlur={() => setPasswdFocus(false)}
            aria-invalid={validPasswd ? "false" : "true"}
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={!validName || !validEmail || !validPasswd ? true : false}
          className=" w-36 h-11 px-4 mx-auto text-center border-2 border-amber-600 rounded bg-amber-600 text-white hover:bg-transparent hover:text-amber-600 hover:cursor-pointer disabled:opacity-75"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignupForm;
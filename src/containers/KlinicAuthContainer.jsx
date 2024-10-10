import KlinicAuthForm from "../components/KlinicAuthForm.jsx";
import {useState} from "react";
import clsx from "clsx";

const KlinicAuthContainer = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const signUpState = () => {
    setIsSignUp(!isSignUp);
  }
  return (
      <div className={"flex flex-col" +
          " items-center border" +
          " border border-neutral-100" +
          " bg-zinc-100" +
          " rounded-xl" +
          " px-8" +
          " py-12 w-[600px]"}>
        <div className={"flex border border-neutral-400 rounded-full overflow-clip"}>
          <div>
            <button className={clsx("px-20 py-2 border-r-2 border-red-400 text-xl", isSignUp ? "text-orange-500" : "bg-orange-500 text-bold")}
                    onClick={signUpState}>LogIn
            </button>
          </div>
          <div>
            <button className={clsx("px-20 py-2 text-xl", isSignUp ? "bg-orange-500 text-bold" : "text-orange-500")}
                    onClick={signUpState}>SignUp
            </button>
          </div>
        </div>
        {
          isSignUp ?
              <KlinicAuthForm headerText={"Register"}
                              promptText={"Already have an account?"}
                              actionLink={"#"}
                              actionLinkText={"Login"}
                              buttonText={"SIGN UP"}/> :
              <KlinicAuthForm headerText={"Welcome" +
                  " Back!"}
                              promptText={"Still don't" +
                                  " have an account?"}
                              actionLink={"#"}
                              actionLinkText={"Sign up"}
                              buttonText={"LOGIN"}/>
        }
      </div>
  )
}

export default KlinicAuthContainer;

import AuthForm from "./AuthForm.jsx";
import {useState} from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

const Modal = ({ setIsModalOpen }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const signUpState = () => {
    setIsSignUp(true);
    setIsLogin(false);
  }
  const loginState = () => {
    setIsLogin(true);
    setIsSignUp(false);
  }
  const loginClassNames = classNames(
      "px-20 py-2 text-lg border-r-2 border-orange-400",
      {
        "text-black font-semibold bg-orange-50": isSignUp,
        "text-orange-500 font-semibold": !isSignUp
      }
  )
  const signUpClassNames = classNames(
      "px-20 py-2 text-lg",
      {
        "text-orange-500 font-semibold": isSignUp,
        "text-black font-semibold bg-orange-50": !isSignUp
      }
  )


  return (
      <>
        <div className={"bg-black border border-neutral-400 fixed inset-0 bg-opacity-50 flex items-center justify-center"}>
          <div className={"relative flex flex-col items-center border border-neutral-100 bg-white rounded-xl px-8 py-10 w-[650px]"}>
            <div className={"absolute mb-4 right-8 top-2"}>
              <button onClick={() => setIsModalOpen(false)}>
                <i className="text-3xl fa-solid fa-xmark text-gray-500"></i>
              </button>
            </div>
            <div className={"flex border border-orange-400 rounded-full overflow-clip"}>
              <div>
                <button className={loginClassNames}
                        onClick={loginState}>Login
                </button>
              </div>
              <div>
                <button className={signUpClassNames}
                        onClick={signUpState}>Signup
                </button>
              </div>
            </div>
            {
              isSignUp && <AuthForm headerText={"Register"}
                            promptText={"Already have an account?"}
                            actionLink={"#"}
                            actionLinkText={"Login"}
                            buttonText={"SIGN UP"}/>
            }
            {
              isLogin && <AuthForm headerText={"Welcome Back!"}
                                   promptText={"Still don't have an account?"}
                                   actionLink={"#"}
                                   actionLinkText={"Sign up"}
                                   buttonText={"LOGIN"}/>
            }
          </div>
        </div>

      </>
  );
};

Modal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Modal;

import {Input, Variant} from "./Input.jsx";
import Button from "./Button.jsx";
import PropTypes from "prop-types";

const KlinicAuthForm = ({
                          headerText,
                          promptText,
                          actionLink,
                          actionLinkText,
                          buttonText
                        }) => {
  return (
      <div className={"flex flex-col items-center rounded-xl px-8 py-12"}>
        <div className={"flex flex-col items-center "}>
          <div className={"text-5xl mb-4 font-semibold"}>
            {headerText}
          </div>
          <div className={"text-xl mb-4"}>
            {promptText}
            <a href={actionLink}
               className={"m-2 text-orange-500 hover:underline"}>{actionLinkText}</a>
          </div>
        </div>
        <div className={"flex flex-col"}>
          <form className={"w-[400px]"}
                onSubmit={(e) => {
                  e.preventDefault();
                }}>
            <div className={"mb-5"}>
              <Input type={"email"}
                     label={"Email"}
                     name={"email"}
                     placeholder={"Youremail@gmail.com"}
                     required={true}
                     variant={Variant.SECONDARY}/>
            </div>
            <div className={"mb-5"}>
              <Input type={"password"}
                     label={"Password"}
                     name={"password"}
                     placeholder={"Enter Password"}
                     required={true}
                     variant={Variant.SECONDARY}/>
            </div>
            <div className={"mt-10"}>
              <Button text={buttonText}
                      variant={"default"}
                      fullWidth={true}/>
            </div>
          </form>
        </div>
      </div>
  )
}

KlinicAuthForm.propTypes = {
  headerText: PropTypes.string,
  promptText: PropTypes.string,
  actionLink: PropTypes.string,
  actionLinkText: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
}

export default KlinicAuthForm;

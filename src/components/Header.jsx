import Button from "./Button.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {useState} from "react";
import Modal from "./Modal.jsx";

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleClick = () => {
		setIsModalOpen(!isModalOpen);
	}

	const handleContainer = (e) => {
		if (e.target.parentElement.id === "parent-container") {
			setIsModalOpen(false);
		}
	}

	return (
			<div className={"bg-white overflow-hidden"} id={"parent-container"} onClick={handleContainer}>
				<header className={"flex justify-end items-center p-4"}>
					<Button text={"Login"} onClick={handleClick}>
						<i className={"fa-solid fa-user mr-2"}></i>
					</Button>
				</header>
				{
						isModalOpen && (
								<Modal setIsModalOpen={setIsModalOpen} />
						)
				}
			</div>
	)
}

export default Header;

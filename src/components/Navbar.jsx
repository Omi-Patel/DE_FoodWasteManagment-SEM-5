import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Checkbox,
  Dropdown,
  Label,
  Modal,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";

const Navbarr = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  function onCloseUpModal() {
    setOpenSignupModal(false);
    setName("");
    setEmail("");
  }

  return (
    <div>
      <Navbar fluid rounded className="text-gray-400 bg-gray-900 body-font">
        <NavbarBrand>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white mx-4">
            LOGO
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button onClick={() => setOpenModal(true)}>
            <NavLink to={"/login"}>Login</NavLink>
          </Button>

          <Button className="mx-4" onClick={() => setOpenSignupModal(true)}>
            <NavLink to={"/signup"}>Signup</NavLink>
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavLink className="" to={"/"}>
            HOME
          </NavLink>
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/contact"}>CONTACT</NavLink>
          <NavLink to={"/donate"}>DONATE FOOD!</NavLink>
          <Dropdown label="USER" inline>
            <Dropdown.Item>Customer</Dropdown.Item>
            <Dropdown.Item>Restaurants</Dropdown.Item>
            <Dropdown.Item>Grocery Stores</Dropdown.Item>
            <Dropdown.Item>Bakeries</Dropdown.Item>
          </Dropdown>
        </NavbarCollapse>
      </Navbar>

      {/* login modal */}
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <NavLink
                to={"/signup"}
                className="text-cyan-700 hover:underline dark:text-cyan-500"
                onClick={() => {
                  setOpenModal(false);

                  setOpenSignupModal(true);
                }}
              >
                Create account
              </NavLink>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* signup modal */}

      <Modal show={openSignupModal} size="md" onClose={onCloseUpModal} popup>
        <Modal.Header />
        <Modal.Body className="">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Welcome to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput
                id="name"
                placeholder="Tony Stark"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
            </div>
            <div className="w-full">
              <Button>Sign Up</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?&nbsp;
              <NavLink
                to={"/login"}
                className="text-cyan-700 hover:underline dark:text-cyan-500"
                onClick={() => {
                  setOpenSignupModal(false);
                  setOpenModal(true);
                }}
              >
                Log In
              </NavLink>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbarr;

import { Button } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const DonateFood = () => {
  return (
    <div className="h-full">
      <div>
        <section class="text-blue-100 body-font">
          <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <img
              class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shortpixel.ai/spai/q_glossy+w_596+to_auto+ret_img/olioapp.com/en/wp-content/uploads/sites/1/2023/08/OLIO-Handover-3-Credit-AnnabelStaff-min.jpg"
            />
            <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
                <span className="text-purple-600">Share More,</span>{" "}
                <span className="text-red-300">Waste Less...</span>
              </h1>
              <div className="w-[70%] text-start text-xl">
                <p class="my-4 leading-relaxed">
                  Food waste is a massive problem in our modern society.
                  Roughly, we waste a third of the world’s food yearly (about
                  1.3 billion tons).
                </p>
                <p className="my-4">
                  This is terrible for many reasons, both ethical and
                  environmental. I loved the idea of ‘rescuing’ unsold food at
                  various restaurants at a discounted price.
                </p>
                <p className="my-4">
                  Some focus on minimizing waste in your fridge, and others
                  specialize in providing a chance to redistribute extra food
                  creatively.
                </p>
              </div>
              <div class="flex w-full justify-center items-end">
                <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  <label
                    for="hero-field"
                    class="leading-7 text-sm text-gray-400"
                  >
                    Give Your Details
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-blue-200 focus:bg-transparent border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <Button>
                  <NavLink to={"/about"}>Donate</NavLink>
                </Button>
              </div>
              <p class="text-sm mt-2 text-gray-400 mb-8 w-full">
                We'll never share your details with anyone
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="m-4 w-[70%] mx-auto">
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableHeadCell>Product name</TableHeadCell>
              <TableHeadCell>Qty.</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Age</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-gray-900 dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-100 dark:text-white">
                  {"Bananas"}
                </TableCell>
                <TableCell className="text-gray-100">12</TableCell>
                <TableCell className="text-gray-100">Fruits</TableCell>
                <TableCell className="text-gray-100">7 Days</TableCell>
                <TableCell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-900 dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-100 dark:text-white">
                  Rice
                </TableCell>
                <TableCell className="text-gray-100">1 Kg</TableCell>
                <TableCell className="text-gray-100">Meal</TableCell>
                <TableCell className="text-gray-100">2 Days</TableCell>
                <TableCell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-900 dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-100 dark:text-white">
                  Roti-Sabji
                </TableCell>
                <TableCell className="text-gray-100">2 Plates</TableCell>
                <TableCell className="text-gray-100">Meal</TableCell>
                <TableCell className="text-gray-100">3 Days</TableCell>
                <TableCell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div>
        <section class="text-gray-200 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-blue-200 text-lg title-font font-medium mb-2">
                  Give and get items
                </h2>
                <p class="leading-relaxed text-base">
                  Avoid buying new by sharing and finding items locally.
                </p>
                <a class="mt-3 text-blue-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-blue-200 text-lg title-font font-medium mb-2">
                  Help the planet
                </h2>
                <p class="leading-relaxed text-base">
                  Give your items a second life. Less waste = less damage to the
                  planet.
                </p>
                <a class="mt-3 text-blue-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-blue-200 text-lg title-font font-medium mb-2">
                  Help each other
                </h2>
                <p class="leading-relaxed text-base">
                  Build community and save money by sharing with fellow locals.
                </p>
                <a class="mt-3 text-blue-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DonateFood;

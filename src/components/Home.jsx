import { Button, Carousel, List } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-4">
        <Carousel slideInterval={2000}>
          <img
            src="https://t4.ftcdn.net/jpg/04/16/88/91/240_F_416889137_l2HuHdSveW240Lmzb7K0a6OV8wRUHZst.jpg"
            alt="..."
          />
          <img
            src="https://t4.ftcdn.net/jpg/06/07/44/53/240_F_607445382_zGF0tTOPtAXLqY6KT8irrDESSBgStVD7.jpg"
            alt="..."
          />
          <img
            src="https://t4.ftcdn.net/jpg/04/34/99/91/240_F_434999193_L5sR9xiuQl5xb1f6gn79V8D8xAbww2z7.jpg"
            alt="..."
          />
          <img
            src="https://t3.ftcdn.net/jpg/04/17/97/22/240_F_417972229_cVzns1s0SnQtWG51AWjUHvCha7TRnUPG.jpg"
            alt="..."
          />
          <img
            src="https://t3.ftcdn.net/jpg/06/68/89/08/240_F_668890857_MZM3vI9ztSsq9eQtOSMl5C0LJzjGJZho.jpg"
            alt="..."
          />
        </Carousel>
      </div>

      <div className=" m-4">
        <h1 className="text-white text-3xl text-center font-bold mt-4">
          What is food waste management?
        </h1>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <p class="title-font text-2xl mb-4 font-medium text-gray-200">
                The Food and Agriculture Organization of United Nation defines
                food waste as. “…food appropriate for human consumption being
                discarded, whether it’s kept beyond its expiry date or left to
                spoil”. <br />
                <br /> Food waste management relates to the stages of
                prevention, recovery, recycling, or food waste disposal that
                follows.
              </p>
              <List className="text-gray-400 text-md">
                <List.Item>Food waste tracking and prevention</List.Item>
                <List.Item>Food banks </List.Item>
                <List.Item>Using food as animal feed</List.Item>
                <List.Item>
                  Creating renewable energy through anaerobic digestion
                </List.Item>
              </List>
              <div class="flex justify-center mt-4">
                <Button>
                  <NavLink to={"/about"}>Read More</NavLink>
                </Button>
                <Button className="mx-4">
                  <NavLink to={"/donate"}>Donate !</NavLink>
                </Button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://t4.ftcdn.net/jpg/04/48/30/81/240_F_448308196_d4ccJURvx0EQZQYeDVkbYIv1Lrnro3jp.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

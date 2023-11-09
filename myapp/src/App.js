import "./App.css";
import { useState } from "react";

const stepData = [
  {
    stepCount: 1,
    title: "YOUR INFO",
  },
  {
    stepCount: 2,
    title: "SELECT PLAN",
  },
  {
    stepCount: 3,
    title: "ADD-ONS",
  },
  {
    stepCount: 4,
    title: "SUMMARY",
  },
];

function App() {
  const [stepCount, setStepCount] = useState(1);

  const displayStep1Data = () => (
    <form className="">
      <h1 className="text-2xl font-mono font-bold uppercase text-sky-900">
        Personal info
      </h1>
      <p className="text-sm font-mono text-gray-400">
        Please provide your name,email address, and phone number.
      </p>

      {/* Enter Your Name Form */}
      <div className="mt-7 ">
        <label
          htmlFor="name"
          className="text-sm font-mono font-light  text-sky-900"
        >
          Name
        </label>
        <br />
        <input
          placeholder="Enter Your Name"
          className="border mt-2 p-3 text-black font-serif rounded-lg w-full h-9 border-black outline-1  outline-sky-300"
          type="text"
          id="name"
        />
      </div>

      {/* Enter Your Email Form */}
      <div className="mt-7 ">
        <label
          htmlFor="name"
          className="text-sm required font-mono font-light  text-sky-900"
        >
          E-mail
        </label>
        <br />
        <input
          placeholder="Enter Your E-mail"
          className="border required mt-2 p-3 text-black font-serif rounded-lg w-full h-9 border-black outline-1  outline-sky-300"
          type="email"
          id="name"
        />
      </div>

      <div className="mt-7 ">
        <label
          htmlFor="name"
          className="text-sm font-mono font-light  text-sky-900"
        >
          Phone Number
        </label>
        <br />
        <input
          placeholder="Enter Your Phone Number"
          className="border mt-2 p-3 text-black font-serif rounded-lg w-full h-9 border-black outline-1  outline-sky-300"
          type="tel"
          id="name"
        />
      </div>
    </form>
  );

  const displayDiffrentSteps = () => {
    switch (stepCount) {
      case 1:
        return displayStep1Data();
        break;
      default:
        return null;
    }
  };

  const onNextStep = () => {
    setStepCount((prevState) => prevState + 1);
  };

  return (
    <div
      className="md:px-5 py-5"
      style={{ minHeight: "100vh" }}
      className=" bg-teal-100 w-full flex sm:flex-col md:flex-row  sm:justify-start md:justify-center sm:items-start md:items-center"
    >
      <div className="sm:w-full  relative md:w-10/12 md:px-5 md:py-5 flex sm:flex-col md:felx-row  justify-center items-center  grid sm:grid-cols-1 md:grid-cols-2 sm:grid-rows-2 md:grid-rows-1">
        <ul className="leftSIde-container-bg object-fill  py-5 px-5 flex sm:flex-row md:flex-col sm:justify-center  md:justify-start items-start">
          {stepData.map((eachStep) => (
            <li
              className="w-full mb-5 flex flex-row  items-start"
              key={eachStep.stepCount}
            >
              <p
                draggable="false"
                className=" text-xl px-3 py-3 font-serif text-white font-bold bg-transparent  border-2 border-white h-8 w-8 flex flex-col justify-center items-center rounded-full"
              >
                {eachStep.stepCount}
              </p>
              <div className="sm:hidden md:flex flex-col">
                <h3
                  draggable="False"
                  className="text-sm font-mono font-light uppercase text-gray-400 ml-5"
                >
                  step {eachStep.stepCount}
                </h3>
                <p className="text-sm  font-mono font-bold uppercase text-white ml-5">
                  {eachStep.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {/* Right Side Data */}
        <div className="px-4  sm:m-7 md:m-0 bg-white rounded-md  sm:absolute sm:bottom-10  md:w-full  md:relative md:bottom-0 md:h-full py-3">
          {displayDiffrentSteps()}
          <div className="w-full flex flex-row justify-end">
            <button
              type="button"
              onClick={() => onNextStep()}
              className=" bg-zinc-950 rounded-lg text-sm text-white px-2 flex flex-col justify-center items-center font-bold border-none outline-none cursor-pointer mt-6 py-2 "
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div style={{ backgroundColor: "#1f252d" }}>
<header className=" flex flex-rwo justify-between items-center z-1 top-0 left-0 w-full px-5 py-5">
  <a href="#" className="text-2xl text-white font-bold font-serif">
    Portfolio
  </a>

  <nav className="">
    <a
      href="#"
      className="text-white mr-5 hover:text-sky-600 text-xl font-medium ml-5 trasit-3s"
    >
      Home
    </a>
    <a
      href=""
      className="text-white mr-5 hover:text-sky-600 text-xl font-medium ml-5 trasit-3s"
    >
      About
    </a>
    <a
      href=""
      className="text-white mr-5 hover:text-sky-600 text-xl font-medium ml-5 trasit-3s"
    >
      Skills
    </a>
    <a
      href=""
      className="text-white mr-5 hover:text-sky-600 text-xl font-medium ml-5 trasit-3s"
    >
      Contact
    </a>
  </nav>
</header>
<section>
  <div>
    <h3>Hello, It's Me</h3>
    <h1>Sanju Kumar</h1>
    <h3>
      And I'm a <span>Frontend Developer</span>
    </h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Accusantium, ab autem repellat reiciendis ipsam perspiciatis. Labore
      quod voluptatum natus eaque dolorum, alias expedita consequatur!
    </p>
    <div>
      <a href="">
        <i class="fa-brands fa-github"></i>
      </a>
      <a href="">
        <i class="fa-brands fa-github"></i>
      </a>
      <a href="">Download CV</a>
    </div>
  </div>

  <div>
    <img src="" alt="profile pic" />
  </div>
</section>
  </div>
</section>
</div> */
}

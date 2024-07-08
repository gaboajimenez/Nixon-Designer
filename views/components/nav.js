const nav = document.querySelector("#navegacion");
const createNavInicio = () => {
  nav.innerHTML = `
  <a  href="/" class="place-self-start">
  <img class="object-cover w-[74px] h-[40px] md:object-cover md:w-[80px] md:h-[60px]" src="/img/logo.jpeg">
  </a>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-10 h-10 place-self-end cursor-pointer md:hidden rounded p-2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
  <div class="place-self-end mr-5 hidden gap-5 md:flex">
    <a
    class="hidden md:block transition ease-in-out font-bold mt-2 text-white hover:text-neutral-600"
    href="/"
    >Inicio</a
  >
  <a
    class="hidden md:block transition ease-in-out font-bold mt-2 text-white hover:text-neutral-600"
    href="#quien-soy"
    >Quien Soy</a
  >
  <a
    class="hidden md:block transition ease-in-out font-bold mt-2 text-white hover:text-neutral-600"
    href="#servicios"
    >Mis Servicios</a
  >
  <a
    class="hidden md:block transition ease-in-out font-bold mt-2 text-white hover:text-neutral-600"
    href="#contacto"
    >Contactos</a
  >


    <a
      class="hidden md:block transition ease-in-out font-bold bg-red-600 py-2 px-4 rounded hover:bg-red-900 hover:text-white"
      href="/Login/"
      >Login</a
    >
    <a
      class="hidden md:block transition ease-in-out font-bold bg-red-600 py-2 px-4 rounded hover:bg-red-900 hover:text-white"
      href="/Register/"
      >Register</a
    >
  </div>
  <div
    class="hidden top-16 bottom-0 navegacion right-0 left-0 fixed bg-neutral-700/60 gap-3 flex-col items-center justify-center"
  >
  <div>
      <a
        class="block transition ease-in-out font-bold  py-2 px-4 rounded hover:text-white"
        href="/"
        >Inicio</a
      >
    </div>
  <div>
    <a
    class="hidden md:block transition ease-in-out font-bold mt-2 text-white hover:text-neutral-600"
    href="#quien-soy"
    >Quien Soy</a
  >
  </div>
  <div>
  <a
    class="hidden md:block transition ease-in-out font-bold mt-2 text-white hover:text-neutral-600"
    href="#servicios"
    >Mis Servicios</a
  >
  </div>
  <div>
  <a
    class="hidden md:block transition ease-in-out font-bold mt-2 text-white hover:text-neutral-600"
    href="#contacto"
    >Contactos</a
  >
  </div>
    <div>
      <a
        class="block transition ease-i n-out font-bold bg-red-900 py-2 px-4 rounded hover:bg-red-600 hover:text-white"
        href="/Login/"
        >Login</a
      >
    </div>
    <div>
      <a
        class="block transition ease-in-out font-bold bg-red-600 py-2 px-4 rounded hover:bg-red-900 hover:text-white"
        href="/Register/"
        >Register</a
      >
    </div>
  </div>`;
};



const createNavLogin = () => {
  nav.innerHTML = `
  <a  href="/" class="place-self-start">
  <img class="object-cover w-[74px] h-[40px] md:object-cover md:w-[80px] md:h-[60px]" src="/img/logo.jpeg">
  </a>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-10 h-10 place-self-end cursor-pointer md:hidden rounded p-2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
  <div class="place-self-end mr-5 hidden gap-5 md:flex">
    <a
    class="hidden md:block transition ease-in-out font-bold mt-2 text-white hover:text-neutral-600"
    href="/"
    >Inicio</a
  >


    <a
      class="hidden md:block transition ease-in-out font-bold bg-red-900 py-2 px-4 rounded hover:bg-red-600 hover:text-white"
      href="/Login/"
      >Login</a
    >
    <a
      class="hidden md:block transition ease-in-out font-bold bg-red-600 py-2 px-4 rounded hover:bg-red-900 hover:text-white"
      href="/Register/"
      >Register</a
    >
  </div>
  <div
    class="hidden top-16 bottom-0 navegacion right-0 left-0 fixed bg-neutral-700/60 gap-3 flex-col items-center justify-center"
  >
  <div>
      <a
        class="block transition ease-in-out font-bold  py-2 px-4 rounded hover:text-white"
        href="/"
        >Inicio</a
      >
    </div>
    <div>
      <a
        class="block transition ease-i n-out font-bold bg-red-900 py-2 px-4 rounded hover:bg-red-600 hover:text-white"
        href="/Login/"
        >Login</a
      >
    </div>
    <div>
      <a
        class="block transition ease-in-out font-bold bg-red-600 py-2 px-4 rounded hover:bg-red-900 hover:text-white"
        href="/Register/"
        >Register</a
      >
    </div>
  </div>`;
};

const createNavRegister = () => {
  nav.innerHTML = `
  <a  href="/" class="place-self-start">
  <img class="object-cover w-[74px] h-[40px] md:object-cover md:w-[80px] md:h-[60px]" src="/img/logo.jpeg">
  </a>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-10 h-10 place-self-end cursor-pointer md:hidden rounded p-2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
  <div class="place-self-end mr-5 hidden gap-5 md:flex">
    <a
    class="hidden md:block transition ease-in-out font-bold mt-2 text-white hover:text-neutral-600"
    href="/"
    >Inicio</a
  >


    <a
      class="hidden md:block transition ease-in-out font-bold bg-red-600 py-2 px-4 rounded hover:bg-red-900 hover:text-white"
      href="/Login/"
      >Login</a
    >
    <a
      class="hidden md:block transition ease-in-out font-bold bg-red-900 py-2 px-4 rounded hover:bg-red-600 hover:text-white"
      href="/Register/"
      >Register</a
    >
  </div>
  <div
    class="hidden top-16 bottom-0 navegacion right-0 left-0 fixed bg-neutral-700/60 gap-3 flex-col items-center justify-center"
  >
  <div>
      <a
        class="block transition ease-in-out font-bold  py-2 px-4 rounded hover:text-white"
        href="/"
        >Inicio</a
      >
    </div>

    <div>
      <a
        class="block transition ease-in-out font-bold bg-red-600 py-2 px-4 rounded hover:bg-red-900 hover:text-white"
        href="/Login/"
        >Login</a
      >
    </div>
    <div>
      <a
        class="block transition ease-in-out font-bold bg-red-900 py-2 px-4 rounded hover:bg-red-600 hover:text-white"
        href="/Register/"
        >Register</a
      >
    </div>
  </div>`;
};




 if (window.location.pathname === "/Login/") {
  createNavLogin();
} else if (window.location.pathname === "/Register/") {
  createNavRegister();
}else if(window.location.pathname === "/"){
  createNavInicio();
}
const navBTN = nav.querySelector("svg");

navBTN.addEventListener("click", () => {
  const navegacion = document.querySelector(".navegacion");
  navegacion.classList.toggle("hidden");
  navegacion.classList.toggle("flex");
});

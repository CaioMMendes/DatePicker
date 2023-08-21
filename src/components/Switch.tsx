// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Switch = ({ handleDarkMode }: any) => {
  return (
    <div
      id="switch"
      onClick={() => handleDarkMode()}
      className="relative m-auto flex h-8 w-16 cursor-pointer items-center justify-center "
    >
      <button className=" absolute left-0 top-0 z-20  h-8 w-8 rounded-full bg-white bg-switchLight bg-center bg-no-repeat transition duration-[0.3s]  dark:translate-x-full dark:bg-switchDark"></button>
      <span className="absolute block h-6 w-16  rounded-full border border-[rgba(0,0,0,0.5)] backdrop-blur-sm dark:border-[rgba(255,255,255,0.5)] dark:bg-[rgba(255,255,255,0.1)]"></span>
    </div>
  );
};

export default Switch;

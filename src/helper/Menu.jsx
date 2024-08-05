export const Menu = (props) => {
    const { onSectionChange, menuOpened, setMenuOpened } = props;
  
    return (
      <>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-50 flex top-4 right-4 md:top-12 md:right-12 p-3 bg-black w-11 h-11 rounded-md justify-center"
        >
          <div
            className={` flex bg-red-600 h-1 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
          />
          <div
            className={`flex bg-red-600 h-3 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`felx bg-red-600 h-1 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
        <div
          className={`z-10 fixed top-0 right-0 bottom-0 transition-all overflow-hidden flex flex-col bg-gray-600
        ${menuOpened ? "w-full md:w-80" : "w-0"}`}
        >
          <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
            <MenuButton label="About" onClick={() => onSectionChange(0)} />
            <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
            <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
            <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
          </div>
        </div>
      </>
    );
  };
  
  const MenuButton = (props) => {
    const { label, onClick } = props;
    return (
      <button
        onClick={onClick}
        className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
      >
        {label}
      </button>
    );
  };
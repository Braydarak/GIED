interface MenuIconProps {
    color?: string; // Agregamos la prop opcional color
  }
  
  const MenuIcon: React.FC<MenuIconProps> = ({ color = "#000" }) => {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

          <path
            d="M3 12H21M3 6H21M3 18H21"
            stroke={color} // Aplicamos el color dinámico
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
      </svg>
    );
  };
  
  export default MenuIcon;
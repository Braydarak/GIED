interface MenuIconProps {
    color?: string;
  }
  
  const MenuIcon: React.FC<MenuIconProps> = ({ color = "#000" }) => {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >

          <path
            d="M3 12H21M3 6H21M3 18H21"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
      </svg>
    );
  };
  
  export default MenuIcon;
interface CloseIconProps {
    color?: string; // Agregamos la prop opcional color
  }
  
  const CloseIcon: React.FC<CloseIconProps> = ({color = "#000" }) => {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
          <path
            d="M6 6L18 18M6 18L18 6"
            stroke={color} // Aplicamos el color dinámico
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        
      </svg>
    );
  };
  
  export default CloseIcon;
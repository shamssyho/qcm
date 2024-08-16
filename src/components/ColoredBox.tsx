const ColoredBox = ({ color, number, title }) => {
  // Classe dynamique pour la couleur de fond en fonction de la prop 'color'
  //const backgroundColor = `bg-${color}-500`;

  return (
    <div className={`text-white p-5 m-2 text-center rounded-md text-2xl w-48 h-24 flex flex-col justify-between ${color}`}>
      <div className="text-xs font-bold">{title}</div>
      <div>{number}</div>
    </div>
  );
};

export default ColoredBox;

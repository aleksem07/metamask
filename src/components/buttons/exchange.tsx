const ButtonExchange = ({ className }: { className?: string }) => {
  return <button className={`${className ? className : ""}`}>Exchange</button>;
};

export default ButtonExchange;

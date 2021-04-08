const Button = ({ name, dataRef, className, onClick }) => {
    return <button className={className} onClick={onClick}>{name + dataRef}</button>;
};

export default Button;

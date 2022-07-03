const Button = (props) => {
  const activatingSwitch = () => {
    if (!props.switch) {
      props.setSwitch(true);
    } else {
      props.setSwitch(false);
    }
  };

  return (
    <div className="on-off">
      {props.switch === true ? (
        <button className="on active">
          <p>ON</p>
        </button>
      ) : (
        <button onClick={activatingSwitch} className="off">
          <p>ON</p>
        </button>
      )}
      {props.switch === false ? (
        <button className="off active">
          <p>OFF</p>
        </button>
      ) : (
        <button onClick={activatingSwitch} className="off">
          <p>OFF</p>
        </button>
      )}
    </div>
  );
};

export default Button;

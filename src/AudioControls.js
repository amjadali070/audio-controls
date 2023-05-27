const AudioControls = (props) => {
  return (
    <>
      <button
        onClick={function () {
          if (props.value < 100) {
            props.set(props.value - 1);
          }
        }}
      >
        {" "}
        -{" "}
      </button>
      
      <label>{props.name + " " + props.value}</label>

      <button
        onClick={function () {
          if (props.value > 0) {
            props.set(props.value + 1);
          }
        }}
      >
        {" "}
        +{" "}
      </button>

      
    </>
  );
};

export default AudioControls;

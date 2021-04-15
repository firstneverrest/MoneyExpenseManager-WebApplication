/* Higher-order component use to wrap other component 
 to make the same property and CSS (reduce redundancy)
*/ 

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;

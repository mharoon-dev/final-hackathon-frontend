import "./CardFoodPanda.css";

const CardFoodPanda = () => {
  return (
    <div className="cardFoodPanda">
      <div className="cardFoodPandaImg">
        <img
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="cardFoodPandaDetails">
        <div className="cardFoodPandaTitleDiv">
          <h3 className="cardFoodPandaTitle">Food Panda</h3>
          <div className="cardFoodPandaRating">4.5 Stars</div>
        </div>
        <div className="cardFoodPandaCategory">Fast Food</div>
      </div>
    </div>
  );
};

export default CardFoodPanda;

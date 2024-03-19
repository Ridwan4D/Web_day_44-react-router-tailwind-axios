import PropTypes from "prop-types";
import Feature from "./Feature";

const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="border-2 rounded-2xl p-3 md:p-5 bg-slate-950 text-slate-400 flex flex-col">
      <h2 className="text-center mb-5">
        <span className="text-7xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h3 className="text-4xl text-center">{name}</h3>
      <div className="py-5 p-2 md:px-10 flex-grow">
        {
          features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
        }
      </div>
      <button className="bg-[#50C878] text-white w-full py-2 mt-5 font-bold rounded-md btn border-0">Buy Now</button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;

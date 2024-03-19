import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
const Feature = ({ feature }) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <FaCircleCheck className="text-[#50C878]"></FaCircleCheck>
      <p>{feature}</p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;

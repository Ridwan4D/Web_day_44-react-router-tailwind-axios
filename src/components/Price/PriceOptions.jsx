import PriceOption from "./PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access",
        "Basic fitness classes",
      ],
      price: 30,
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access with towel service",
        "Full access to all fitness classes",
      ],
      price: 50,
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access with towel service",
        "Full access to all fitness classes",
        "Access to sauna and steam room",
        "Personal training session once a month",
      ],
      price: 80,
    },
    {
      id: 4,
      name: "Elite Membership",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access with towel service",
        "Full access to all fitness classes",
        "Access to sauna and steam room",
        "Unlimited personal training sessions",
        "Nutritional counseling",
        "Exclusive member events",
      ],
      price: 120,
    }
  ];

  return (
    <div className="my-10 mx-2 md:mx-16 space-y-5">
      <h2 className="text-5xl">Our Best Prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;

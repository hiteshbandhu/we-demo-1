const PricingBox = ({ product }) => {
  const { id, unit_amount, nickname, offers } = product;

  // Convert unit_amount to a more readable format
  const formattedPrice = (unit_amount / 100).toFixed(2); // assuming unit_amount is in cents

  return (
    <div
      key={id}
      className="pricing-box mx-4 mb-8 p-6 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white via-gray-100 to-gray-50"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{nickname}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-4">${formattedPrice}</p>
      <ul className="list-disc pl-5 mb-4 text-gray-700">
        {offers.map((offer, index) => (
          <li key={index} className="text-base">{offer}</li>
        ))}
      </ul>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        aria-label={`Select ${nickname} plan`}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingBox;

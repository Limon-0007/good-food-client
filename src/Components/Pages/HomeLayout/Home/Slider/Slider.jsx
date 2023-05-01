import React from "react";
const Slider = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/blackboard-delicious-mexican-food_23-2147740715.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.1.311772693.1668666155&semt=robertav1_2_sidr")` }}>
    <div className="hero-overlay"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default Slider;

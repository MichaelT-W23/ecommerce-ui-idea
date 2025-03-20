const BoldText = ({ text }) => {
  return (
    <div> 
      <div 
        className="w-full border-b-1 border-black pl-4"
        style={{
          paddingTop: 13,
          paddingBottom: 13
        }}
        > 
        <h1 
          className="font-bold cursor-pointer"
          style={{ fontSize: '17.5px' }}
        >
          {text}
        </h1>
      </div>
      <div className="pb-24"></div>
    </div>
  );
};

export default BoldText;

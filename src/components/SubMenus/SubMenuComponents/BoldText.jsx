const BoldText = ({ text }) => {
  return (
    <div> 
      <div 
        className="w-full pl-4"
        style={{
          paddingTop: 13,
          paddingBottom: 13,
          borderBottom: '1px solid #262626'
        }}
      > 
        <h1 
          className="font-bold cursor-pointer"
          style={{ fontSize: '17.5px' }}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default BoldText;

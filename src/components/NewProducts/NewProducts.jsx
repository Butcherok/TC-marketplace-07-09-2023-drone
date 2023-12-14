import { useApi } from '../../contexts/ApiContext/ApiContext';

const NewProducts = () => {
  const { query } = useApi();

  return (
    <div className="api">
      {query.map((item, index) => (
        <div key={index}>
          <img src={item.gallery[0]} alt="ddd" />
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
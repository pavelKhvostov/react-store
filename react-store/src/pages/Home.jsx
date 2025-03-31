import Card from '../components/Card';

const Home = ({ items }) => {
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__inner'>
          <h2 className='content__title'>Все кроссовки</h2>
          <input type='text' className='content__input' />
        </div>
        <div className='wrapper__inner'>
          {items.map((obj) => (
            <Card {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

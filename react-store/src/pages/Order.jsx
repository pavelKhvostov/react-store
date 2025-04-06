import Card from '../components/Card';

function Order({ orderItems }) {
  const totalPrice = orderItems.reduce((sum, obj) => {
    return obj.price + sum;
  }, 0);
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__wrap'>
          <h2 className='content__title'>Мои покупки на сумму: {totalPrice} Р</h2>
        </div>
        <div className='wrapper__inner'>
          {orderItems.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;

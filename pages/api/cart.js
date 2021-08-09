export default function handler(req, res) {
  const { discount, tax, items } = JSON.parse(req.body);

  const subtotal = items.reduce((subtotal, { price, quantity }) => {
    return subtotal + ( price * quantity );
  }, 0);

  let total = subtotal;

  if ( discount > 0 ) {
    total = total - ( total * discount );
  }

  if ( tax > 0 ) {
    total = total + ( total * tax );
  }

  res.status(200).json({
    items,
    discount,
    tax,
    subtotal,
    total
  });
}

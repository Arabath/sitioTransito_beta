const RenderHeader = () => {
  let headerElement = ['', 'causa', 'año', 'acta', 'dominio'];

  return headerElement.map((key, index) => {
    return (
      <th className='tabla-deuda' key={index}>
        {key.toUpperCase()}
      </th>
    );
  });
};

export default RenderHeader
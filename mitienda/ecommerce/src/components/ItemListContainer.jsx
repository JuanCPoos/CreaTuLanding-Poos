import PropTypes from "prop-types";

const ItemListContainer = ({ message }) => {
  return (
    <div>
      <h2>{message}</h2>
      {/* Aquí irá el contenido de la lista de ítems */}
    </div>
  );
};

ItemListContainer.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ItemListContainer;

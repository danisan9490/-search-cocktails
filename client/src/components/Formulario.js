import React from 'react'

const Formulario = () => {
  return (
    <form
      className="col-12"
    >
      <fieldset className="text-center">
        <legend>Search by Ingredient or Category</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Search by Ingredient"
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
          >
            <option value="">-- Select Category --</option>
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
}

export default Formulario; 
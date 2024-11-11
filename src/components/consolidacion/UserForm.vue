<template>
  <div>
    <h2>Información del Usuario</h2>
    <form>
      <label>Nombres Completos</label>
      <input type="text" />
      <label>DNI</label>
      <input type="text" />
      <label>Dirección</label>
      <input type="text" />
      <label>Teléfono</label>
      <input type="text" />
      <label>Fecha de Emisión</label>
      <input type="date" />
      <label>Fecha de Vencimiento</label>
      <input type="date" />
      <label>Capital</label>
      <input type="number" />
      <label>Detalle de Factura</label>
      <input type="text" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm'
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>

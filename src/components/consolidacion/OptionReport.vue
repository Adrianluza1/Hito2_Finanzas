<template>
  <div>
    <h2>Opciones de Reporte</h2>
    <button>Guardar Reporte</button>
    <button>Borrar Reporte</button>
    <button>Editar Reporte</button>
  </div>
</template>

<script>
export default {
  name: 'OptionReport'
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #2b9bb8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #49b6d0;
}
</style>

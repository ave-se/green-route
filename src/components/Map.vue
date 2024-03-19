<template>
  <div>
    <l-map :zoom="13" :center="[48.858093, 2.294694]">
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker :lat-lng="[48.858093, 2.294694]"></l-marker>
    </l-map>
  </div>
</template>

<script>
export default {
  name: 'Map',
};
</script>

<style scoped>
.l-map {
  height: 500px;
  width: 100%;
}
</style>
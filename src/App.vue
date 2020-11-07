<template>
  <div id="app">
    <keepAlive>
      <router-view v-if="$route.meta.keepAlive" />
    </keepAlive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style>
</style>

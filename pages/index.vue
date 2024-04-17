<template>
  <div>
    <vc-date-picker
      :value="null"
      color="red"
      is-dark
      is-range
      locale="kz"
    />

    <vc-calendar is-expanded locale="kz" />

    <vc-calendar title-position="left" locale="kz" />

  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

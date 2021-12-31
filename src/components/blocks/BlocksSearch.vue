<template>
  <b-input-group class="UniqueFullWidth">
    <b-form-input placeholder="Search" class="SearchInput"></b-form-input>
    <b-input-group-append>
      <span class="input-group-text">
        <b-icon-search class=""></b-icon-search>
      </span>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {

}
</script>

<style>
.UniqueFullWidth .input-group-text {
  width: 48px;
  background-color: #ffffff;
}

.UniqueFullWidth .SearchInput {
  border-right: none;
}
</style>
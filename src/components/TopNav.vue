<template>
  <div class="top-nav-container">
    <div class="logo">
      <img src="https://picsum.photos/100/100" />
    </div>
    <div class="document-title">
      <p>Title</p>
    </div>
    <div class="right-top-nav">
      <p>buttons</p>
    </div>
  </div>
</template>

<script>


</script>

<style>
.top-nav-container{
  background-color: #151B30;
  width: 100%;
  height: 8vh;
  color: white;
  display: flex;
  justify-content: space-between;
}
.right-top-nav{
 padding-right:2% ;
}
.logo{
  padding-left:2%;
}
.logo img{
  max-height: 100%;
}
.document-title{
  text-align: center;
  padding-top: 15px;
  font-weight: 700;
  font-size: 2rem;
}

</style>
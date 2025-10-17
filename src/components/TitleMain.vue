<!-- This is component slot reusable when we call it just sent props and use the template that we call it is name slot -->
<template>
   <div class="service_container">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            {{ title }} <span>{{ subtitle }}</span>
          </h2>
          <p>
            <slot name="text"></slot>
          </p>
          <div class="">
              <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
    props: ['title','subtitle']
  }
</script>

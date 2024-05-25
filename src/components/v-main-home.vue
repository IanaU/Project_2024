<template>
    <div>
        <h1>Home</h1>

        <div class="container-fluid">

        
            <div class="row pt-2">
                
                <div class="col-12 col-md-4">
                    <p>
                        <ul class="list-group">
                        <li class="list-group-item"
                        v-for="(category,index) in categories" 
                        :key="index"
                        v-on:click = "selectCategory(index)"
                        v-bind:class="{' active' : selectIndex === index}"
                        > {{ category }}</li>
                        </ul>
                    </p>
                </div>

                <div class="col-12 col-md-8">
                    <p>work area</p>
                    <p> {{ selectIndex }} </p>
                    <p> {{ category1 }}</p>

                    <div class="row row-cols-2 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <img :src="require('../assets/user1.jpg')" class="card-img-top" alt="11">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
        <img :src="require('../assets/user2.jpg')" class="card-img-top" alt="11">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
        <img :src="require('../assets/user3.jpg')" class="card-img-top" alt="11">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
        <img :src="require('../assets/user1.jpg')" class="card-img-top" alt="11">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
                    
                    
                </div>
            </div>

            <div class="row">
                <p>footer</p>
                {{ user1.firstName }}
                {{ user1.email }}
                {{ user1.address.country }}
                {{ dateCreated }}
                {{ search }}
            </div>

        </div>    



      </div>
</template>

<script>
export default {
    name: "v-main-home",
    components: {
        // component1, component2
    },
    data(){
        return {
            search: "",
            title: 'Home page',
            categories: ["Vasya","Ivan","Iva","Ivanna"],
            selectIndex: 0,
            dateCreated: new Date(),
            category1: "",
            user1: {firstName: "Vasya Pypkin",
                email: "vasya@ukr.net",
                id: 5,
                address: {
                    city: "Kiev",
                    country: "Ukraine",
                    street: "Pallalby",
                    building: 123

                }
            }
        }
    },
    // props:{
    // },
    // computed:{
    // },
    methods:{
        selectCategory(index){
            this.selectIndex = index;
            this.category1 = this.categories[index];
        }

    }
    // ,
    // watch:{
    // }
}
</script>

<style scoped>

</style>
<template>
  <div class="container">
    <form >
         <label>ClassName:</label>
             <input type="text" name="title" v-model="clas.title"/>
         <label>Subject:</label>
             <input type="text" name="subject" v-model="clas.subject" />
         <button type="submit" @click.prevent="addClass">Insert Class</button>
     </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            clas:{
                title: '',
                subjet: ''
            }
        }
    },
    methods:{
        addClass(){
            axios.post("http://localhost:4000/classes", this.clas)
            .then(
            //console.log(res.data),
            window.location.href="/")

        }
    }
}
</script>
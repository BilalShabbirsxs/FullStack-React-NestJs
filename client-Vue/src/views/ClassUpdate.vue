<template>
  <div class="container">
    <form >
         <label>ClassName:</label>
             <input type="text" name="title" v-model="clas.title"/>
         <label>Subject:</label>
             <input type="text" name="subject" v-model="clas.subject" />
         <button type="submit" @click.prevent="updateClass">Update Class</button>
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
                subject: ''
            }
        }
    },
    methods:{

        updateClass(){
            axios.patch("http://localhost:4000/classes/"+this.$route.params.id, this.clas)
            .then(res=>{
                console.log(res);
                //console.log(res.data);
                window.location.href="/"
            })
        }

    },
    created(){
        //console.log(this.$data)
        axios.get("http://localhost:4000/classes/"+this.$route.params.id)
        .then(res=>{
            console.log(res)
            this.clas.title = res.data.title
            this.clas.subject = res.data.subject
        })
    }
}
</script>
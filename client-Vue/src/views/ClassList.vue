<template>
  <div class="container">
     <table>
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Title</th>
                            <th>Subject</th>
                            <th>Remove</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="(clas, index) in classes" :key="index">
                            <td>{{index}}</td>
                            <td>{{clas.title}}</td>
                            <td>{{clas.subject[0]}}</td>
                            <td><button @click.prevent="removeClass(clas._id)">Delete</button></td>
                            <td><button @click.prevent="directUpdate(clas._id)">Update</button></td>
                        </tr>
                        <tr>
                           
                            <td>Add A class to Database</td>
                            <td><button @click.prevent="directAdd">Add Class</button></td>
                        
                        </tr>

                    </tbody>
                </table>
                
  </div>
</template>

<script>
import axios from 'axios' 

export default {
    data(){
        return{
            classes: [],
        }
    },
    methods:{
        directAdd(){
            window.location.href= '/input';
        },

        removeClass(id){
            axios.delete("http://localhost:4000/classes/"+id)
            .then(res=>{
                console.log(res.data)
                window.location.href="/"
            })
        },

        directUpdate(id){
            window.location.href='/update/'+id
        }
    },
    created(){
        axios.get("http://localhost:4000/classes")
        .then(res=>{
            console.log(res)
            this.classes = res.data
        })
    }
}
</script>